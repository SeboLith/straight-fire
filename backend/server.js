require('import-export');
require('babel-core/register')({ presets: ['es2015', 'react'] });
require.extensions['.css'] = () => {
	return;
};

const express = require('express');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const react = require('react');
const reactRouter = require('react-router');
const reactDomServer = require('react-dom/server');
const injectTapEventPlugin = require('react-tap-event-plugin');
const app = express();
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';


// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/**
 * dnsPrefetchControl controls browser DNS prefetching
 * frameguard to prevent clickjacking
 * hidePoweredBy to remove the X-Powered-By header
 * hsts for HTTP Strict Transport Security
 * ieNoOpen sets X-Download-Options for IE8+
 * noSniff to keep clients from sniffing the MIME type
 * xssFilter adds some small XSS protections
 */
app.use(helmet());
// GZIP all assets
app.use(compression());
// Add headers
app.use(function (req, res, next) {

	// Website you wish to allow to connect
	var allowedOrigins = ['http://localhost:3000', 'http://localhost:8090', 'https://straight-fire.herokuapp.com'];
	var origin = req.headers.origin;
	console.log('origin', origin);
	if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

// Register server-side rendering middleware
// -----------------------------------------------------------------------------
// since this file is not es6 compatible, when importing files with es6 code that export default -- call the default method
const appRouter = require('../src/routes');

const renderToString = reactDomServer.renderToString;
// browserHistory does not work with node, we simulate it with the match() method
const match = reactRouter.match;
// base react component to render from our server
const RouterContext = reactRouter.RouterContext;
// we use createRoutes method from react-router to create a set of routes from our ../src/routes component and provide it to match
const createRoutes = reactRouter.createRoutes;
const routes = createRoutes(appRouter.default());
// array of static files that will be requested by the browser
const staticFiles = [
	'/static/*',
	'/images/*',
	'/asset/manifest.json',
	'/favicon.ico'
];

// the default error handler
const error = (e, res) => {
	res.status(500).send(e.message);
};

app.server = http.createServer(app);

// for the static file requested "req.url", loop through the "staticFiles" array
staticFiles.forEach(file => {
	app.get(file, (req, res) => {
		// serve it up from the backend folder, go up one level -> find the build folder
		// serve the files listed in the "staticFiles" array
		const filePath = path.join(__dirname, '../build', req.url);
		res.sendFile(filePath);
	});
});

/**
 * returns the names of the files in the images/kicks directory
 */
app.get('/api/kicks', (req, res) => {

	const kicksPath = path.join(__dirname, '../build/images/kicks');

	if (!fs.existsSync(kicksPath)) {
		console.log("no dir ", kicksPath);
		return;
	}

	fs.readdir(kicksPath, function (err, files) {
		if (err) {
			error(err, res);
		}
		res.status(200).send(files);
	});
});

/**
 * handles all other calls
 */
app.get('*', (req, res) => {

	const indexPath = path.join(__dirname, '../build', 'index.html');
	const notFoundPath = path.join(__dirname, '../build', '404.html');

	fs.readFile(indexPath, 'utf-8', (err, htmlData) => {
		if (err) {
			error(err, res);
		} else {
			match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
				if (err) {
					error(err, res);
				} else if (redirectLocation) {
					res.redirect(302, redirectLocation.pathName + redirectLocation.search);
				} else if (renderProps) {
					const content = renderToString(react.createElement(RouterContext, renderProps));
					const RenderedApp = htmlData.replace('<react-app/>', content);
					res.status(200).send(RenderedApp);
				} else {
					res.status(404).sendFile(notFoundPath);
				}
			});
		}
	});
})

app.set('port', (process.env.PORT || 8090));
let port = app.get('port');

app.server.listen(port, () => {
	let host = app.get('ip');
	console.log(`Find the server at: http://${host}:${port}/`); // eslint-disable-line no-console
});
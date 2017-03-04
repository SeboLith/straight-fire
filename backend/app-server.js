import express from 'express';
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import http from 'http';
import https from 'https';
import path from 'path';
import fs from 'fs';
import S3FS from 's3fs';
import compression from 'compression';
import react from 'react';
import { match, RouterContext, createRoutes } from 'react-router';
import reactDomServer from 'react-dom/server';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { schema } from './graphql';

const app = express();


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// Setup AWS bucket
// -----------------------------------------------------------------------------
const straightFireBucket = new S3FS('straight-fire', {
	accessKeyId: process.env.SF_AWS_ID,
	secretAccessKey: process.env.SF_AWS_KEY
});

let kicksPaths = [];

straightFireBucket.readdirp('kicks').then(function (files) {
	kicksPaths = files.map((file) => {
		var imgPath = `https://s3.amazonaws.com/straight-fire/kicks/${file}`;
		return imgPath;
	});
}, function (reason) {
	// Something went wrong
	console.log('reason', reason);
});

// Connect mongo database
// -----------------------------------------------------------------------------
// mongoose.connect('mongodb://${process.env.SF_USERNAME}:${process.env.SF_PASSWORD}@${process.env.SF_URL}:${process.env.SF_PORT}/${process.env.SF_DB_NAME}');


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
	var allowedOrigins = [
		'http://localhost:3000',
		'http://localhost:8090',
		'https://straight-fire.herokuapp.com',
		'http://www.straight-fire.com',
		'http://straight-fire.com'
	];
	var origin = req.headers.origin;

	if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// if 'Cache-Control' header isn't set, set it for 7 days
	if (!res.getHeader('Cache-Control')) {
		var maxAge = 86400000 * 7;
		res.setHeader('Cache-Control', 'public, max-age=' + (maxAge));
	}

	// Pass to next layer of middleware
	next();
});


// Routing
// -----------------------------------------------------------------------------
// since this file is not es6 compatible, when importing files with es6 code that export default -- call the default method
const appRouter = require('../src/routes');
const renderToString = reactDomServer.renderToString;
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
 * returns the names of the files in the "straight-fire/kicks" s3 bucket
 */
app.get('/api/kicks', (req, res) => {
	res.status(200).send(kicksPaths);
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
			// browserHistory does not work with node, we simulate it with the match() method
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

	console.log(`Listening on port: ${port}`); // eslint-disable-line no-console

	keepAwake();
});

/**
 * When your app is asleep, resources will have to spin up, resulting in a suboptimal user experience.
 * Keep the app alive by calling it every 30 seconds
 */
function keepAwake() {

	const localPorts = ['3000', '8090'];

	// if we're not on localhost, ping the application
	if (localPorts.indexOf(port) < 0) {
		setInterval(function () {
			https.get("https://straight-fire.herokuapp.com/");
		}, 30000); // every 30 seconds (30000)
	}
}
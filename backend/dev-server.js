require('import-export');
require('babel-core/register')({ presets: ['es2015', 'react'] });

const express = require('express');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const app = express();


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
	var allowedOrigins = ['http://localhost:3000'];
	var origin = req.headers.origin;
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

const error = (e, res) => {
	res.status(500).send(e.message);
};

app.server = http.createServer(app);

/**
 * returns the names of the files in the imahes/kicks directory
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

app.set('port', (process.env.PORT || 8090));

app.server.listen(app.get('port'), () => {
	console.log(`Find the development server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
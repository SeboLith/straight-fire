// This module lets you use ES6 modules (import/export syntax) in nodejs modules.
require('import-export');
// One of the ways you can use Babel is through the require hook.
// The require hook will bind itself to node’s require and automatically compile files on the fly.
require('babel-core/register')({ presets: ['react', 'es2015', 'stage-2'] });

// since our code is running on both the server and client, node will throw errors for .css and .scss files
// bypass those errors by requring the extensions
require.extensions['.css'] = () => {
	return;
};

require.extensions['.scss'] = () => {
	return;
}

require('./app-server');
require('import-export');
require('babel-core/register')({ presets: ['react', 'es2015', 'stage-2'] });
require.extensions['.css'] = () => {
	return;
};

const production = ( process.env.NODE_ENV === "production" );

(production ?
	require('./app-server') :
	require('./api-server'));
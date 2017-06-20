require('import-export');
require('babel-core/register')({ presets: ['react', 'es2015', 'stage-2'] });
require.extensions['.css'] = () => {
	return;
};

require('./app-server');
const path = require('path');
const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');

module.exports = {
	webpack: (config, env) => {
		config = rewireSvgReactLoader(config, env);
		config.entry = path.resolve(__dirname, 'src/spa.bootstrap.js');
		config.output = {
			filename: 'test.js',
			library: 'test',
			libraryTarget: 'amd',
			path: path.resolve(__dirname, 'build/test'),
		};
		config.mode = 'development';
		delete config.optimization;
		// config.plugins = [
		// 	new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'src/spa.bootstrap.js') }]),
		// 	new webpack.NamedModulesPlugin(),
		// 	new webpack.HotModuleReplacementPlugin(),
		// ];
		console.log(config.module.rules);
		return config;
	},
	devServer: function(configFunction) {
		return function(proxy, allowedHost) {
			const config = configFunction(proxy, allowedHost);
			config.headers = {
				'Access-Control-Allow-Origin': '*',
			};
			return config;
		};
	},
	// The paths config to use when compiling your react app for development or production.
	paths: function(paths, env) {
		return paths;
	},
};

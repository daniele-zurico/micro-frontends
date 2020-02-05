/* eslint-env node */
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CONFIG_URL = process.env.CONFIG_URL;
const NAVBAR_URL = process.env.NAVBAR_URL;
const PEOPLE_URL = process.env.PEOPLE_URL;
const PLANETS_URL = process.env.PLANETS_URL;
const FETCHWITHCACHE_URL = process.env.FETCHWITHCACHE_URL;
const COMMON_DEPS_URL = process.env.COMMON_DEPS_URL;
const APPS_URL = process.env.APPS;
module.exports = {
	entry: './src/config.js',
	output: {
		filename: 'config.js',
		library: 'config',
		libraryTarget: 'amd',
		path: path.resolve(__dirname, 'build'),
	},
	mode: 'production',
	module: {
		rules: [
			{ parser: { System: false } },
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: [path.resolve(__dirname, 'node_modules'), /\.krem.css$/],
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							localIdentName: '[path][name]__[local]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins() {
								return [require('autoprefixer')];
							},
						},
					},
				],
			},
			{
				test: /\.css$/,
				include: [path.resolve(__dirname, 'node_modules')],
				exclude: [/\.krem.css$/],
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
	},
	plugins: [
		CopyWebpackPlugin([
			{ from: path.resolve(__dirname, 'src/index.html') },
			{ from: path.resolve(__dirname, 'src/styles.css') },
			{ from: path.resolve(__dirname, 'src/apps.json') },
		]),
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			inject: false,
			template: './src/index.html',

			// Pass the full url with the key!
			config_url: CONFIG_URL,
			navbar_url: NAVBAR_URL,
			people_url: PEOPLE_URL,
			planets_url: PLANETS_URL,
			fetchWithCache_url: FETCHWITHCACHE_URL,
			commonDeps_url: COMMON_DEPS_URL,
			apps: APPS_URL,
		}),
	],
	devtool: 'source-map',
	externals: [/^lodash$/, /^single-spa$/, /^rxjs\/?.*$/],
};

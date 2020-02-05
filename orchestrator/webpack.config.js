/* eslint-env node */
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require("./.config.js");

module.exports = env => {
  if (env === undefined) {
    console.error("you need to define an environment to build properly");
  }
  console.log("NODE_ENV: ", env.NODE_ENV);

  return {
    entry: "./src/config.js",
    output: {
      filename: "config.js",
      library: "config",
      libraryTarget: "amd",
      path: path.resolve(__dirname, "build"),
    },
    mode: "production",
    module: {
      rules: [
        { parser: { System: false } },
        {
          test: /\.js?$/,
          exclude: [path.resolve(__dirname, "node_modules")],
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          exclude: [path.resolve(__dirname, "node_modules"), /\.krem.css$/],
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                localIdentName: "[path][name]__[local]",
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins() {
                  return [require("autoprefixer")];
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, "node_modules")],
          exclude: [/\.krem.css$/],
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      modules: [__dirname, "node_modules"],
    },
    plugins: [
      CopyWebpackPlugin([
        { from: path.resolve(__dirname, "src/index.html") },
        { from: path.resolve(__dirname, "src/styles.css") },
        { from: path.resolve(__dirname, "src/apps.json") },
      ]),
      new CleanWebpackPlugin(["build"]),
      new HtmlWebpackPlugin({
        inject: false,
        template: "./src/index.html",

        // Pass the full url with the key!
        config_url: env ? config[env.NODE_ENV].config_url : "",
        navbar_url: env ? config[env.NODE_ENV].navbar_url : "",
        people_url: env ? config[env.NODE_ENV].people_url : "",
        planets_url: env ? config[env.NODE_ENV].planets_url : "",
        fetchWithCache_url: env ? config[env.NODE_ENV].fetchWithCache_url : "",
        commonDeps_url: env ? config[env.NODE_ENV].commonDeps_url : "",
        apps: env ? JSON.stringify(config[env.NODE_ENV].apps, null, 2) : "",
      }),
    ],
    devtool: "source-map",
    externals: [/^lodash$/, /^single-spa$/, /^rxjs\/?.*$/],
  };
};

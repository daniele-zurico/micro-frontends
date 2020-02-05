const config = require("./webpack.config.js");
const webpack = require("webpack");
const merge = require("webpack-merge");

module.exports = env =>
  merge(config(env), {
    mode: "development",
    devServer: {
      contentBase: "./build",
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      proxy: {
        "/common/": {
          target: "http://localhost:8234",
          pathRewrite: { "^/common": "" },
        },
      },
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  });

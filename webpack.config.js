const path = require("path");

const commonJSConfig = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "wian-utils.common.js",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

const umdConfig = {
  entry: "./src/index.umd.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "wian-utils.js",
    library: ["wian", "Utils"],
    libraryExport: "default",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

module.exports = [commonJSConfig, umdConfig];

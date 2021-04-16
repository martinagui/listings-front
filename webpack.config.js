const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HTMLWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /jsx?$/,
        use: ["babel-loader"],
        exclude: "/node_modules/",
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlPlugin],
};

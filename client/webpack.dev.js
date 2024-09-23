const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./", "dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin([{ from: "assets", to: "" }]),
  ],

  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "http://localhost:9000",
    }),
  },
};

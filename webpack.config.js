const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "'./dist",
    filename: "main.js",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/,},
      { test: /\.css$/i, use: ['style-loader', 'css-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
  ],
  devServer: {
    hot: true,
    contentBase: "./dist"
  }
}
var CleanPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  plugins: [
    new CleanPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new CopyPlugin([{ from: 'src/img', to: 'img' }])
  ]
};

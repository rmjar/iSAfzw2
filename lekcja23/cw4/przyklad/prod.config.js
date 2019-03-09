var CleanPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: "img"
          },
        }]
      }
    ]
  },
  plugins: [
    new CleanPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    //new CopyPlugin([{ from: 'src/img', to: 'img' }])
  ]
};

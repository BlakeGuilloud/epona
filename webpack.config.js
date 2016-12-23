const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'epona': [path.join(__dirname, './lib/epona.js')],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'epona',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/] },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};

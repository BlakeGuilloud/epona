module.exports = {
  entry: {
    epona: './lib/epona.js',
  },
  output: {
    path: './dist',
    filename: '[name].min.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [],
};

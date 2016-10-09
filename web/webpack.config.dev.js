const path = require('path');
const webpack = require('webpack');

const DIRECTORY = path.join(__dirname);

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },
  entry: [
    path.join(__dirname, '../index.web.js'),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(react-native-vector-icons)\/).*/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: {
          name: '[name].[hash:16].[ext]',
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9-=&.]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};

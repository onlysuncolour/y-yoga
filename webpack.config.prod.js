var path = require('path');
var webpack = require('webpack');
var less = require("less");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: [
    // 'webpack/hot/only-dev-server',
    path.resolve(APP_PATH, 'index.jsx')
  ],
  output: {
    path: BUILD_PATH,
    // publicPath: '/assets/',
    filename: 'bundle.js'
  },
  //enable dev source map
  // devtool: 'eval-source-map',
  //enable dev server
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true,
  //   port: 9520
  // },
  resolve: {
    extensions: ['', '.js', '.jsx','.json', 'png', 'less', 'jpg', 'jpeg', 'css', 'gif'],
    alias: {
      'Utils': path.resolve(APP_PATH, './common/utils.js'),
      'Request': path.resolve(APP_PATH, './common/request.js'),
      'Dict': path.resolve(APP_PATH, './common/config/dict.js'),
      'app': APP_PATH,
      'actions': path.resolve(APP_PATH, 'common/redux/actions.js'),
      'Socket': path.resolve(APP_PATH, 'common/socket.js'),
      'G': path.resolve(APP_PATH, 'common/global-event.js'),
      'browserHistory': path.resolve(APP_PATH, 'common/history.js'),
      'store': path.resolve(APP_PATH, 'common/redux/store.js'),
    }
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', include: APP_PATH, query: {presets: ['es2015', 'react']}},
      {test: /\.js?$/, loader: 'babel', include: APP_PATH, query: {presets:  ['es2015']}},
      {test: /\.json?$/, loader: 'json'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.png$/, loader:"url-loader?limit=10000&mimetype=image/png&name=images/[hash:8].[name].[ext]", options:{publicPath:'/'}},
      {test: /\.jpeg$/, loader:"url-loader?limit=10000&mimetype=image/jpeg&name=images/[hash:8].[name].[ext]", options:{publicPath:'/'}},
      {test: /\.jpg$/, loader:"url-loader?limit=10000&mimetype=image/jpg&name=images/[hash:8].[name].[ext]", options:{publicPath:'/'}},
      {test: /\.gif$/, loader:"url-loader?limit=10000&mimetype=image/jpg&name=images/[hash:8].[name].[ext]", options:{publicPath:'/'}},
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Utils': 'Utils',
      'Request': 'Request',
      'Dict': 'Dict',
      'actions': 'actions',
      'Socket': 'Socket',
      'G': 'G',
      'browserHistory': 'browserHistory',
      'store': 'store',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}

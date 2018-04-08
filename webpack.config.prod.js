const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const fs = require('fs')
// const os = require('os')
// const WebpackSshDeployPlugin = require('webpack-ssh-deploy-plugin').WebpackSshDeployPlugin
var APP_PATH = path.resolve(__dirname, 'app');

module.exports = {
  entry: path.resolve(APP_PATH, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        },
        exclude: /(node_modules)/,
      }, { test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /(node_modules)/,
      }, { test: /\.(png|jpg|jpeg$|gif|eot|otf|webp|ttf|woff|woff2|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }, { test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      }, { test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "young-yoga",
      // hash: true,
    }),
    new webpack.ProvidePlugin({
      'Utils': 'Utils',
      'Request': 'Request',
      'Dict': 'Dict',
      'actions': 'actions',
      'Socket': 'Socket',
      'searchformat': 'searchformat',
      'Manba': 'Manba',
      'G': 'G',
      'browserHistory': 'browserHistory',
      'store': 'store',
    }),
    // new WebpackSshDeployPlugin({
    //   root: '/home/young/smbshare',
    //   host: '47.100.2.29',
    //   port: 22,
    //   username: 'root',
    //   readyTimeout: 9999999,
    //   privateKey: fs.readFileSync(path.join(os.homedir(), '.ssh/yyoga')),
    // })
  ],
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx','.json', 'png', 'less', 'css', 'jpeg', 'gif'],
    alias: {
      'Utils': path.resolve(APP_PATH, './common/utils.js'),
      'Request': path.resolve(APP_PATH, './common/request.js'),
      'Dict': path.resolve(APP_PATH, './common/config/dict.js'),
      'app': APP_PATH,
      'searchformat': 'query-string',
      "Manba": 'manba',
      'actions': path.resolve(APP_PATH, 'common/redux/actions.js'),
      'Socket': path.resolve(APP_PATH, 'common/socket.js'),
      'G': path.resolve(APP_PATH, 'common/global-event.js'),
      'browserHistory': path.resolve(APP_PATH, 'common/history.js'),
      'store': path.resolve(APP_PATH, 'common/redux/store.js'),
    }
  },

};

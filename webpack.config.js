const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var APP_PATH = path.resolve(__dirname, 'app');

module.exports = {
  entry: path.resolve(APP_PATH, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
    new HtmlWebpackPlugin({
      title: "young-yoga",
    }),
    new webpack.ProvidePlugin({
      'Utils': 'Utils',
      'Request': 'Request',
      'Dict': 'Dict',
      'actions': 'actions',
      'Socket': 'Socket',
      'Manba': 'Manba',
      'G': 'G',
      'browserHistory': 'browserHistory',
      'store': 'store',
    })
  ],
  mode: 'development',
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 9520,
    "proxy": {
      "/api": {
        "target": "http://localhost:9521",
        // changeOrigin: true,
        // secure: false,
        logLevel: 'debug'
      },
    }
  },
  resolve: {
    extensions: ['.js', '.jsx','.json', 'png', 'less', 'css', 'jpeg', 'gif'],
    alias: {
      'Utils': path.resolve(APP_PATH, './common/utils.js'),
      'Request': path.resolve(APP_PATH, './common/request.js'),
      'Dict': path.resolve(APP_PATH, './common/config/dict.js'),
      'app': APP_PATH,
      "Manba": 'manba',
      'actions': path.resolve(APP_PATH, 'common/redux/actions.js'),
      'Socket': path.resolve(APP_PATH, 'common/socket.js'),
      'G': path.resolve(APP_PATH, 'common/global-event.js'),
      'browserHistory': path.resolve(APP_PATH, 'common/history.js'),
      'store': path.resolve(APP_PATH, 'common/redux/store.js'),
    }
  },

};

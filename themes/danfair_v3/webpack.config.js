const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ['./js/src/app.js'],
  output: {
    path: __dirname + '/js/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://danfair.dev'
      },
      {
        reload: true
      }
    )
  ]
}
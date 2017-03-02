const path = require('path');
module.exports = {
  entry: ['./js/src/app.js'],
  output: {
    path: __dirname + '/js/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
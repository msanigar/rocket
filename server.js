var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');
var fs = require('fs');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    quiet: true
  }).listen(3000, '0.0.0.0', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Running at http://0.0.0.0:3000');
  });

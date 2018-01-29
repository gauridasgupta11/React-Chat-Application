var webpackCfg = require('./webpack.config');

// Set node environment to testing
process.env.NODE_ENV = 'test';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    browsers: [ 'Chrome' ], //run in Chrome
    files: [
      'src/test/test.js'
    ],
    port: 8000,
    captureTimeout: 60000,
    singleRun: true,
    preprocessors: {
      'src/test/test.js': [ 'webpack', 'sourcemap' ]
    },
    webpack: webpackCfg,
    colors: true,
    autoWatch: true,
    webpackServer: {
      noInfo: true
    }
  });
};

var path = require('path');
var paths = require('./ionic.config').paths;


module.exports = {
  entry: [
    'es6-shim/es6-shim.min',
    'zone.js/dist/zone-microtask',
    'reflect-metadata',
    'web-animations.min',
    './app/app'
  ],
  output: {
    path: path.join(__dirname, paths.wwwDir, paths.buildDir, paths.buildJSDir),
    filename: paths.appBundle,
    publicPath: path.join(paths.buildDir, paths.buildJSDir),
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript',
        query: {
          'doTypeCheck': false
        },
        include: [path.join(__dirname, paths.appDir)],
        exclude: /node_modules/
      }
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /web-animations/,
      /zone\.js\/dist\/zone-microtask/
    ]
  },
  resolve: {
    alias: {
      'web-animations.min': 'ionic-framework/js/web-animations.min',
    },
    extensions: ['', '.js', '.ts']
  }
};

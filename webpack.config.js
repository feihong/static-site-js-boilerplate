const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: {
    'helloworld': './site/helloworld/app.es6',
    'flexbox': './site/flexbox/app.es6',
    'test-program': './site/test-program/app.es6',
    'another-page': './site/another-page/app.es6',
    // This comment marks where new entry points will be added
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve('site'),
    filename: '[name]/bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'static/js/vendor.bundle.js')
  ],
  resolve: {
    alias: {
      lib: path.resolve('lib')
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.es6']
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        include: [
          path.resolve('site'),
          path.resolve('lib'),
        ],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          cacheDirectory: true
        }
      }
    ]
  }
}

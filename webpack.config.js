const path = require('path')
const webpack = require('webpack')


module.exports = {
  // Add new entry points here.
  entry: {
    helloworld: './site/helloworld/app.babel.js',
    flexbox: './site/flexbox/app.babel.js',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve('site'),
    filename: '[name]/bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js')
  ],
  resolve: {
    alias: {
      lib: path.resolve('site/lib')
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.babel.js']
  },
  module: {
    loaders: [
      {
        test: /\.babel\.js$/,
        include: [
          path.resolve('site')
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

const path = require('path')
const webpack = require('webpack')


// All apps that need to be built by WebPack are listed here.
const APPS = [
  'helloworld',
  'flexbox',
]
var entry = APPS.reduce((result, app) => {
  result[app] = `./site/${app}/app.babel`
  return result
}, {})
entry.vendor = [
  'react',
  'react-dom',
]

module.exports = {
  entry: entry,
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
    extensions: ['', '.webpack.js', '.web.js', '.js', '.babel']
  },
  module: {
    loaders: [
      {
        test: /\.babel$/,
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

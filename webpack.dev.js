/**
 * Webpack Development Configuration
 * 
 * This file contains webpack configuration for development builds,
 * including hot module replacement and development server settings.
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  
  devServer: {
    static: {
      directory: './dist',
    },
    hot: true,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  
  optimization: {
    minimize: false,
  },
  
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  },
});

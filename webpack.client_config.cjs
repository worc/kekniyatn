/* global require module __dirname */
// import path from 'path'
//
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: [
    './src/index.tsx',
  ],

  output: {
    clean: true,
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '.build'),
  },

  resolve: {
    extensions: [ '.ts', '.js', '.tsx', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    'static': {
      directory: '.dist/',
    },
    host: '0.0.0.0',
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    }),
    new BundleAnalyzerPlugin({
      logLevel: 'error',
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, '.bundle_analysis.html'),
      openAnalyzer: false,
    }),
  ],
}

const { merge } = require('webpack-merge')
const path = require('path')
const fs = require('fs')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new CssMinimizerPlugin({
			minimizerOptions: {
				preset: ['default', { calc: false }]
			}
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: path.join('src', 'source-suggestions.json'),
				to: 'data.json'
			}]
		})
	],
	optimization: {
    minimize: true,
    minimizer: [
			'...',
      new JsonMinimizerPlugin(),
    ]
  }
})

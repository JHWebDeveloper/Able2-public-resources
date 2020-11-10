const { merge } = require('webpack-merge')
const path = require('path')
const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')

const common = require('./webpack.common')

class DeleteJSPlugin {
	apply(compiler) {
		compiler.hooks.compilation.tap('DeleteJSPlugin', compilation => {
			HTMLWebpackPlugin
				.getHooks(compilation)
				.beforeAssetTagGeneration
				.tapAsync('DeleteScriptTag', (data, cb) => {
					data.assets.js = []
					cb(null, data)
				})
		})
		
		compiler.hooks.done.tap('DeleteJSPlugin', () => {
			const main = path.resolve('index.bundle.js')
			if (fs.existsSync(main)) fs.unlink(main, err => console.error(err))
		})
	}
}

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
		}),
		new DeleteJSPlugin()
	],
	optimization: {
    minimize: true,
    minimizer: [
			'...',
      new JsonMinimizerPlugin(),
    ]
  }
})

const { merge } = require('webpack-merge')
const path = require('path')
const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
				to: 'source-suggestions.min.json',
				transform: content => JSON.stringify(JSON.parse(content.toString()).sort())
			}]
		}),
		new DeleteJSPlugin()
	]
})

const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')

class DeleteJS {
	apply(compiler) {
		compiler.hooks.done.tap('DeleteJS', () => {
			const main = path.resolve('delete.js')
			if (fs.existsSync(main)) fs.unlink(main, err => console.error(err))
		})
	}
}

module.exports = {
	entry: path.resolve('src', 'index.css'),
	output: {
		path: __dirname,
		filename: 'delete.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									postcssPresetEnv({ stage: 0 })
								]
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: path.join('index.min.css')
		}),
		new HTMLWebpackPlugin({
			inject: false,
			filename: 'index.html',
			template: path.resolve('src', 'index.html')
		}),
		new DeleteJS()
	],
}

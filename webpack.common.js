const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
	target: 'web',
	entry: {
		index: path.resolve('src', 'index.css')
	},
	output: {
		path: __dirname,
		filename: 'index.bundle.js'
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
			filename: 'index.html',
			template: path.resolve('src', 'index.html')
		})
	]
}

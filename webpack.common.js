const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin')
const postcssPresetEnv = require('postcss-preset-env')

const able2VersionWin = '2.3.1'
const able2VersionMac = '2.3.1'
const sSGVersionWin = '1.0.3'
const sSGVersionMac = '1.0.3'

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
			able2VersionWin,
			able2VersionMac,
			sSGVersionWin,
			sSGVersionMac,
			filename: 'index.html',
			template: path.resolve('src', 'index.html')
		}),
		new HTMLWebpackInlineSVGPlugin({
			runPreEmit: true
		})
	]
}

const { merge } = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: 3000,
		publicPath: '/',
		contentBase: path.resolve('src'),
		watchContentBase: true,
		hot: true,
		open: true
	}
})

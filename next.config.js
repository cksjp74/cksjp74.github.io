const path = require('path')

module.exports = {
	assetPrefix: './',
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	// ref: https://github.com/webpack-contrib/css-loader#localidentname
	webpack(config) {
		config.module.rules[3].oneOf.forEach((moduleLoader) => {
			Array.isArray(moduleLoader.use) &&
			moduleLoader.use.forEach((l) => {
				if (/(?<!post)css-loader/.test(l.loader)) {
					const others = l.options.modules
					l.options.modules = {
						...others,
						localIdentName: '[local]_[hash:base64:6]',
					}
				}
			})
		})
		return config
	}
}
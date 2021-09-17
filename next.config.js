const path = require('path')

module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	webpack(config) {
		config.module.rules[3].oneOf.forEach((moduleLoader) => {
			Array.isArray(moduleLoader.use) &&
			moduleLoader.use.forEach((l) => {
				if (/(?<!post)css-loader/.test(l.loader)) {
					const { getLocalIdent, ...others } = l.options.modules
					l.options = {
						...l.options,
						modules: {
							...others,
							localIdentName: "[hash:base64:6]",
						},
					}
				}
			})
		})
		return config
	}
}
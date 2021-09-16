const path = require('path');

module.exports = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}


// TODO: remove hash afer real classname
// URL: https://github.com/vercel/next.js/discussions/14156
// This should work but not working
/*
const path = require('path');

const regexEqual = (x, y) =>
  x instanceof RegExp &&
  y instanceof RegExp &&
  x.source === y.source &&
  x.global === y.global &&
  x.ignoreCase === y.ignoreCase &&
  x.multiline === y.multiline;

module.exports = {
  webpack(config) {
    const sassRules = config.module.rules
      .find((rule) => typeof rule.oneOf === "object")
      .oneOf.find(
        (rule) =>
          rule.sideEffects === false &&
          regexEqual(rule.test, /\.module\.(scss|sass)$/)
      );

    sassRules.use = sassRules.use.map((rule) =>
      rule.loader.includes(path.join(__dirname, "node_modules", "css-loader", "dist", "cjs.js"))
        ? {
            ...rule,
            options: {
              ...rule.options,
              modules: {
                ...rule.modules,
                localIdentName: "[hash:base64:5]",
              },
            },
          }
        : rule
    );

    return config;
  },
};
*/
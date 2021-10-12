const fs = require('fs')

const staticPages = fs.readdirSync('pages')
	.filter(staticPage => {
		return ![
			'_app.js',
			'_document.js',
			'_error.js',
			'sitemap.xml.js',
		].includes(staticPage)
	}).map(path => `https://cksjp74.github.io/${path.slice(0, -3)}`)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  	${staticPages.map((url) => `<url>
		<loc>${url}</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>1.0</priority>
	</url>`).join('')}
</urlset>`

fs.writeFileSync('./public/sitemap.xml', sitemap)

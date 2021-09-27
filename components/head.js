import _Head from 'next/head'

// override the default next head
export default function Head({title}) {
	return (
		<_Head>
			<title>{title} — 建中高三日研 | CKSJP</title>
			<meta name='description' content='我們只是一群熱愛日本文化的高三生。在繁忙的課業之餘，我們選擇靜靜體會日本文化之美，在重重的考試之外，有一個薰陶素養的所在。'/>
			<meta property='og:type' content='article'/>
			<meta property='og:title' content='建國中學高三日本文化研究社'/>
			<meta property='og:description' content='我們只是一群熱愛日本文化的高三生。在繁忙的課業之餘，我們選擇靜靜體會日本文化之美，在重重的考試之外，有一個薰陶素養的所在。' />
			<meta property='og:url' content='https://cksjp74.github.io/' />
			<meta property='og:site_name' content='建中高三日研' />
			<meta property='og:image' content='https://cksjp74.github.io/img/manifest.jpg' />
			{/*Global site tag (gtag.js) - Google Analytics*/}
			<script async src='https://www.googletagmanager.com/gtag/js?id=G-Z2CM6JFNK3'/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					
					gtag('config', 'G-Z2CM6JFNK3');`
				}}/>
		</_Head>
	)
}
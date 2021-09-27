import _Head from 'next/head'

// override the default next head
export default function Head({title}) {
	return (
		<_Head>
			<title>CKSJP — {title}</title>
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
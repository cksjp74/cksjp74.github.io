import head from 'next/head'

// override the default next head
export default function Head({title}) {
	return (
		<head>
			<title>CKSJP —— {title}</title>
			<link rel="icon" href="/favicon.ico" />
		</head>
	)
}
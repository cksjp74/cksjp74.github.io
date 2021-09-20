import _Head from 'next/head'

// override the default next head
export default function Head({title}) {
	return (
		<_Head>
			<title>CKSJP — {title}</title>
		</_Head>
	)
}
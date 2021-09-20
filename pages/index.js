import Head from "../components/general/head"
import Layout from "../components/layout"

import font from "../styles/font.module.sass"
import styles from "../styles/page/index.module.sass"

export default function Home() {
	return (<>
		<Head title={"首頁"}/>
		<Layout isHome manifest = {<Manifest/>}>
			<p className={`${font.superTitle}`}>日本の文化を研究する。</p>
			<p>
				什麼，你說日文打錯了嗎？<br/>
				好啦，我就只是個日文很爛的網管。<br/>
				但這正是日本文化帶給我的魅力：<br/>
				<em className={font.cite}>未知而博大精深。</em>
			</p>
			<hr/>
			<p>
				<p className={font.title}>關於我們</p>

			</p>
		</Layout>
	</>)
}

function Manifest() {
	return (
		<div className={styles.manifest}>
			<h4>日本文化研究社</h4>
			<h1>すべてが日本。</h1>
		</div>
	)
}
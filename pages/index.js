import Head from "../components/general/head"
import Layout from "../components/layout"
import Manifest from "../components/general/manifest"

import font from "../styles/font.module.sass"
import layout from "../styles/layout.module.sass"

export default function Home() {
	return (<>
		<Head title={"首頁"}/>
		<Layout
			isHome
			manifest = {<Manifest/>}
			children = {<>
				<p className={`${font.title} ${layout.superTitle}`}>日本の文化を研究する。</p>
				<p>
					什麼，你說日文打錯了嗎？<br/>
					好啦，我是真的不很會日文。<br/>
					但這正是日本文化帶給我的魅力：<br/>
					<em className={font.cite}>未知而博大精深。</em>
				</p>
			</>}
		/>
	</>)
}

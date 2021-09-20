import Head from '../components/head'
import Layout from '../components/layout'
import Paragraph from '../components/paragraph'

import font from '../styles/font.module.sass'
import styles from '../styles/page/index.module.sass'

export default function Home() {
	return (<>
		<Head title={'首頁'}/>
		<Layout isHome manifest = {<Manifest/>}>
			<Paragraph id='overall'>
				<p className={`${font.superTitle}`}>日本の文化を研究する。</p>
				<p>
					什麼，你說日文打錯了嗎？<br/>
					好啦，我就只是個日文很爛的網管<br/>
					但這正是日本文化帶給我的魅力<br/>
				</p>
				<p className={font.cite}>
					充滿了未知待我探索<br/>
					曼妙而博大精深。</p>
			</Paragraph>
			<Paragraph id='about'>
				<p className={font.title}>關於我們</p>
				<p className={font.cite}>
					我們只是一群<br/>
					熱愛日本文化的高三生。
				</p>
				<p>
					在繁忙的課業之餘<br/>
					我們選擇靜靜體會日本文化之美<br/>
					在重重的考試之外<br/>
					有一個薰陶素養的所在
				</p>
			</Paragraph>
			<Paragraph id='aim'>
				<p className={font.title}>成立宗旨</p>
				<p>
					隨著國際化的趨勢<br/>
					日本文化成了現代世界文化中重要的一環<br/>
					我們期盼透過社團活動加深對其之理解<br/>
					得以拓展國際視野、加深文化素養
				</p>
				<p>
					身處世代更迭加劇<br/>
					異文化間交流增長的現在<br/>
					培養接納不同文化的精神<br/>
					順著世界的風振翮
				</p>
				<p>
					在國際化社會下<br/>
					多一個可以自如使用的語言<br/>
					多了解一個國家的文化<br/>
					使自己成為國際化的人才<br/>
					唯有更加通達的國際觀<br/>
					才能使眼界更加廣闊
				</p>
			</Paragraph>
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
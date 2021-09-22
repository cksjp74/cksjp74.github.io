import styles from '../styles/layout.module.sass'

export default function Footer() {
	return (<>
		<footer className={styles.footer}>
			此網頁使用
			<a href='https://nextjs.org/'>Next.js</a>
			和
			<a href='https://pages.github.com/'>Github Pages</a>
			運行。<br/>
			原始碼可於
			<a href='https://github.com/cksjp74/cksjp74.github.io'>此處</a>
			查看。
		</footer>
	</>)
}
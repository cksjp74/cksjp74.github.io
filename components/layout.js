import styles from '../styles/layout.module.sass'

export default function Layout({children}) {
	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>建中高三日研</header>
				{children}
			</div>
		</>
	)
}
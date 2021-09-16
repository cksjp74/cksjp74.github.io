import Main from './layout/main'

import styles from '../styles/layout.module.sass'

export default function Layout() {
	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>建中高三日研</header>

				<Main />
			</div>
		</>
	)
}
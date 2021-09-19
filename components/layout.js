import Header from "./general/header"

import styles from '../styles/layout.module.sass'

export default function Layout({manifest, children}) {
	return (
		<>
			<Header/>
			<div className={styles.container}>
				{manifest}
				<main id="main">{children}</main>
			</div>
		</>
	)
}
import Header from "./general/header"

import styles from '../styles/layout.module.sass'

export default function Layout({manifest, children}) {
	return (<>
		<Header/>
		{manifest}
		<div className={styles.container}>
			<main id="main">{children}</main>
		</div>
	</>)
}
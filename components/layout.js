import {Header, Sidebar} from "./general/header"

import styles from '../styles/layout.module.sass'

export default function Layout({children}) {
	return (
		<>
			<div className={styles.container}>
				<Header/>
				<Sidebar/>
				<main id="main">{children}</main>
			</div>
		</>
	)
}
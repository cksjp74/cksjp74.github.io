import {Header, Sidebar} from "./general/header"

import styles from '../styles/layout.module.sass'

export default function Layout({children}) {
	return (
		<>
			<Header/>
			<Sidebar/>
			<div className={styles.container}>
				<main id="main">{children}</main>
			</div>
		</>
	)
}
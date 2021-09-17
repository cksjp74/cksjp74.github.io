import Header from "../components/general/header"

import styles from '../styles/layout.module.sass'

export default function Layout({children}) {
	return (
		<>
			<div className={styles.container}>
				<Header/>

				<main>{children}</main>
			</div>
		</>
	)
}
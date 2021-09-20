import Header from './general/header'

import styles from '../styles/layout.module.sass'

export default function Layout({manifest, children, isHome = false}) {
	return (<>
		<Header isHome={isHome}/>
		{manifest}
		<div className={styles.container}>
			<main id='main'>{children}</main>
		</div>
	</>)
}
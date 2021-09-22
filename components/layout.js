import Header from './header'

import styles from '../styles/layout.module.sass'
import Footer from './footer';

export default function Layout({manifest, children, isHome}) {
	return (<>
		<Header isHome={isHome}/>
		{manifest}
		<div className={styles.container}>
			<main id='main'>{children}</main>
			<Footer/>
		</div>
	</>)
}
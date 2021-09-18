import styles from "../../styles/layout.module.sass"
import $ from 'jquery'

function toggleNav() {
	let sidebar = $('#sidebar')
	let curtain = $('.' + styles.curtain)
	if (sidebar.attr('data-opened') === 'false') {
		sidebar.attr('data-opened', 'true')
		sidebar.css('width', '250px')
		curtain.css('width', '100vw')
	} else {
		sidebar.attr('data-opened', 'false')
		sidebar.css('width', '0')
		curtain.css('width', '0')
	}
}

export function Header() {
	return (
		<header className={styles.header}>
			<div style={{width: 0}}><button className={styles.openNav} onClick={toggleNav}/></div>
			<h1>建中高三日研</h1>
		</header>
	)
}

export function Sidebar() {
	return (
		<>
			<div id="sidebar" className={styles.sidebar} data-opened="false">
				<a className={styles.closeNav} onClick={toggleNav} href='javascript:void(0)'/>
			</div>
			<div className={styles.curtain}/>
		</>
	)
}
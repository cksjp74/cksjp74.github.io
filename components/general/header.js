import styles from "../../styles/layout.module.sass"
import $ from 'jquery'
import React from "react"

function toggleNav() {
	let sidebar = $('#sidebar')
	let curtain = $('.' + styles.curtain)
	if (sidebar.attr('data-opened') === 'false') {
		sidebar.attr('data-opened', 'true')
		sidebar.css('width', '250px')
		curtain.css('visibility', 'visible')
		curtain.css('opacity', '.5')
	} else {
		sidebar.attr('data-opened', 'false')
		sidebar.css('width', '0')
		curtain.css('visibility', 'hidden')
		curtain.css('opacity', '0')
	}
}

export function Header() {
	return (
		<header className={styles.header}>
			<div style={{width: 0}}><button className={styles.openNav} onClick={""}/></div>
			<h1>建中高三日研</h1>
		</header>
	)
}

// export function Sidebar(props) {
	
// 	function toggle() {
// 		let sidebar = $('.' + styles.sidebar);
// 		let curtain = $('.' + styles.curtain)
// 		if(this.state.opened) {
// 			sidebar.css('width', '0')
// 			curtain.css('visibility', 'hidden')
// 			curtain.css('opacity', '0')
// 		}else {
// 			sidebar.css('width', '250px')
// 			curtain.css('visibility', 'visible')
// 			curtain.css('opacity', '.5')
// 		}
// 		props.opened = !props.opened;
// 	}

// 	return (
// 		<>
// 			<div id="sidebar" className={styles.sidebar} data-opened="false">
// 				<a className={styles.closeNav} onClick={toggle} href='javascript:void(0)'/>
// 				<a href='/'>關於我們</a>
// 				<a href='/lessons'>社團課程</a>
// 			</div>
// 			<div className={styles.curtain}/>
// 		</>
// 	)
// }

export class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: false
		}
	}

	toggle() {
		let sidebar = $(this);
		let curtain = $('.' + styles.curtain)
		if(this.state.opened) {
			sidebar.css('width', '0')
			curtain.css('visibility', 'hidden')
			curtain.css('opacity', '0')
		}else {
			sidebar.css('width', '250px')
			curtain.css('visibility', 'visible')
			curtain.css('opacity', '.5')
		}
		this.state.opened = !this.state.opened;
	}

	render() {
		return (
			<>
				<div id="sidebar" className={styles.sidebar} data-opened="false">
					<a className={styles.closeNav} onClick={this.toggle} href='javascript:void(0)'/>
					<a href='/'>關於我們</a>
					<a href='/lessons'>社團課程</a>
				</div>
				<div className={styles.curtain}/>
			</>
		)
	}
}
import styles from "../../styles/layout.module.sass"
import $ from 'jquery'
import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {opened: false}
	}

	toggle = (e) => {
		e.preventDefault();
		this.setState(prevState => {
			let sidebar = $('.' + styles.sidebar)
			let curtain = $('.' + styles.curtain)
			if (prevState.opened) {
				sidebar.css('width', '0')
				curtain.css('visibility', 'hidden')
				curtain.css('opacity', '0')
			} else {
				sidebar.css('width', '250px')
				curtain.css('visibility', 'visible')
				curtain.css('opacity', '.5')
			}
			return {opened: !prevState.opened}
		})
	}

	render() {
		return (<>
			<header className={styles.header}>
				<div style={{width: 0}}>
					<a className={styles.openNav} onClick={this.toggle}/>
				</div>
				<h1>建中高三日研</h1>
			</header>
			<div className={styles.sidebar}>
				<a className={styles.closeNav} onClick={this.toggle}/>
				<Link href='/'>關於我們</Link>
				<Link href='/lessons'>社團課程</Link>
			</div>
			<div className={styles.curtain}/>
		</>)
	}
}
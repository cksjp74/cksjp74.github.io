import $ from 'jquery'
import React from 'react'
import Link from 'next/link'

import styles from '../styles/layout.module.sass'

export default class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {opened: false, hideHeader: this.props.isHome}
	}

	componentDidMount() {window.addEventListener('scroll', this.onScroll, false)}

	componentWillUnmount() {window.removeEventListener('scroll', this.onScroll, false)}

	onScroll = () => {
		if (this.props.isHome) this.setState(prevState => {
			return {
				...prevState,
				hideHeader: (window.scrollY < window.innerHeight)
			}
		})
	}

	toggle = (e) => {
		if (e.target.href === '') e.preventDefault()
		this.setState(prevState => {
			$('.' + styles.sidebar).toggleClass(styles.opened, !prevState.opened)
			return {
				...prevState,
				opened: !prevState.opened
			}
		})
	}

	render() {
		return (<>
			<header className={`${styles.header} ${this.state.hideHeader ? styles.hide : ''}`}>
				<div className={styles.openNav}>
					<a onClick={this.toggle}/>
				</div>
				<div className={styles.title}><Link href='/'>建中高三日研</Link></div>
			</header>
			<div className={styles.sidebar}>
				<a className={styles.closeNav} onClick={this.toggle}/>
				<Link href='/'><a onClick={this.toggle}>關於我們</a></Link>
				<Link href='/lessons'><a onClick={this.toggle}>社團課程</a></Link>
			</div>
			<div className={styles.curtain} onClick={this.toggle}/>
		</>)
	}
}
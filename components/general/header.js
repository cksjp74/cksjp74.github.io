import styles from "../../styles/layout.module.sass";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.hamburger}/>
			<h1>建中高三日研</h1>
		</header>
	)
}
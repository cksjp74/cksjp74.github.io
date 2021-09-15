import Head from 'next/head'
import styles from '../styles/layout.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>建中高三日研</header>

            <main>{children}</main>
        </div>
    )
}
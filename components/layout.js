import Head from 'next/head'
import styles from '../styles/layout.module.css'

export default function Layout({title, children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>建中高三日研——{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>建中高三日研</header>

            <main>{children}</main>

        </div>
    )
}
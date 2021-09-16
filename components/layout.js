import Head from 'next/head'
import Mainfest from "../components/mainfest"
import styles from '../styles/layout.module.sass'

export default function Layout({title, children}) {
    return (
        <>
            <Mainfest></Mainfest>
            <div className={styles.container}>
                <header className={styles.header}>建中高三日研</header>

                <main>{children}</main>
            </div>
        </>
    )
}
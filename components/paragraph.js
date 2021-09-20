import styles from '../styles/layout.module.sass'

export default function Paragraph({id, children}) {
	return (<>
		<div className={styles.paragraph} id={id}>
			{children}
		</div>
		<hr/>
	</>)
}
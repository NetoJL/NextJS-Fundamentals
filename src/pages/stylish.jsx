import styles from '../styles/Stylish.module.css'
import Link from 'next/link'

export default function Stylish() {
    return (
        <div className={styles.purple}>
            <Link href="/">Back</Link>
            <h1>Style using CSS Modules</h1>
        </div>
    )
}
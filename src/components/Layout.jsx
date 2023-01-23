import Link from "next/link";
import styles from "../styles/Layout.module.css";

import Header from './Header'

export default function Layout(props) {
	return (
		<div className={styles.layout}>
			<div className={styles.header}>
                <Header title={props.title ?? 'Header example'}/>
				<Link href="/">Back</Link>
			</div>

			<div className={styles.body}>
                {props.children}
            </div>
		</div>
	);
}

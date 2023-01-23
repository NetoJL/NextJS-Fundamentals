import styles from "../styles/Stylish.module.css";
import Layout from '../components/Layout'

export default function Stylish() {
	return (
		<Layout title="CSS module example">
			<div className={styles.purple}>
				<h1>Style using CSS Modules</h1>
			</div>
		</Layout>
	);
}

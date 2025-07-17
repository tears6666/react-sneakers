import Catalog from '../components/Catalog/Catalog'
import Header from '../components/Header/Header'
import styles from './styles/App.module.scss'
export default function App() {
	return (
		<>
			<div className={styles.border}></div>
			<Header />
			<Catalog />
		</>
	)
}

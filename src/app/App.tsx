import Catalog from '../components/Catalog/Catalog'
import Header from '../components/Header/Header'
import styles from './styles/App.module.scss'
export default function App() {
	return (
		<>
			<div className={styles.border__top}></div>
			<Header />
			<Catalog />
			<div className={styles.border__bottom}></div>
		</>
	)
}

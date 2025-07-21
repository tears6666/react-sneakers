import { Route, Routes } from 'react-router-dom'
import Catalog from '../components/Catalog/Catalog'
import Favorites from '../components/Favorites/Favorites'
import Header from '../components/Header/Header'
import styles from './styles/App.module.scss'

export default function App() {
	return (
		<>
			<div className={styles.border__top}></div>
			<Header />
			<Catalog />
			<div className={styles.border__bottom}></div>
			<Routes>
				<Route path='/' element={<Catalog />} />
				<Route path='/favorites' element={<Favorites />} />
			</Routes>
		</>
	)
}

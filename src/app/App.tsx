import { Route, Routes } from 'react-router-dom'
import Basket from '../components/Basket/Basket'
import Catalog from '../components/Catalog/Catalog'
import Favorites from '../components/Favorites/Favorites'
import { Layout } from '../components/Layout/Layout'
import styles from './styles/App.module.scss'

export default function App() {
	return (
		<>
			<div className={styles.border}></div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Catalog />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/basket' element={<Basket />} />
				</Route>
			</Routes>
			<div className={styles.border}></div>
		</>
	)
}

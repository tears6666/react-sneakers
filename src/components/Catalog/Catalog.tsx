import { useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useCatalogStore } from '../../store/store'
import styles from './Catalog.module.scss'

export default function Catalog() {
	const sneakers = useCatalogStore(state => state.sneakers)
	const fetchSneakers = useCatalogStore(state => state.fetchSneakers)
	useEffect(() => {
		try {
			fetchSneakers()
		} catch (error) {
			console.log('Error', error)
		}
	}, [fetchSneakers])

	return (
		<div className={styles.catalog}>
			<h2 className={styles.catalog__subtitle}>Все кроссовки</h2>
			<form className={styles.catalog__form}>
				<CiSearch className={styles.form__icon} />
				<input
					type='text'
					className={styles.form__search}
					placeholder='Поиск...'
				/>
			</form>
			<div className={styles.catalog__content}>
				{sneakers.map(sneaker => (
					<div key={sneaker.id} className={styles.content__card}>
						<img src={sneaker.img} alt='sneaker' width={sneaker.width} />
						<p className={styles.card__title}>{sneaker.title}</p>
						<p className={styles.card__cost}>{sneaker.cost}</p>
					</div>
				))}
			</div>
		</div>
	)
}

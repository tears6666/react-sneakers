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
			<div className={styles.catalog__top}>
				<h2 className={styles.top__subtitle}>Все кроссовки</h2>
				<form className={styles.top__form}>
					<CiSearch className={styles.form__icon} />
					<input
						type='text'
						className={styles.form__search}
						placeholder='Поиск...'
					/>
				</form>
			</div>
			<div className={styles.catalog__content}>
				{sneakers.map(sneaker => (
					<div key={sneaker.id} className={styles.content__card}>
						<img src={sneaker.img} alt='sneaker' width={sneaker.width} />
						<div className={styles.card__under}>
							<p className={styles.under__title}>{sneaker.title}</p>
							<div className={styles.under__buy}>
								<p className={styles.buy__text}>Цена</p>
								<p className={styles.buy__cost}>{sneaker.cost} РУБ</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

import { MdFavoriteBorder } from 'react-icons/md'
import { useCatalogStore } from '../../store/store'
import styles from './Favorites.module.scss'

export default function Favorites() {
	//Dispatch
	const favorites = useCatalogStore(state => state.favorites)
	const removeFromFav = useCatalogStore(state => state.removeFromFavorite)

	return (
		<div className={styles.favorites}>
			<div className={styles.favorites__top}>
				<h2 className={styles.top__subtitle}>Избранное</h2>
			</div>
			<div className={styles.favorites__content}>
				{favorites.map(product => (
					<div key={product.id} className={styles.content__card}>
						<MdFavoriteBorder
							onClick={() => removeFromFav(product.id)}
							className={styles.card__fav}
						/>
						<img src={product.img} alt='sneaker' width={product.width} />
						<div className={styles.card__under}>
							<p className={styles.under__title}>{product.title}</p>
							<div className={styles.under__buy}>
								<p className={styles.buy__text}>Цена</p>
								<p className={styles.buy__cost}>{product.cost} РУБ</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

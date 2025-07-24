import { CiSquarePlus } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'
import { useCatalogStore } from '../../store/store'
import styles from './Favorites.module.scss'

export default function Favorites() {
	//Dispatch
	const favorites = useCatalogStore(state => state.favorites)
	const removeFromFav = useCatalogStore(state => state.removeFromFavorite)
	const addToCart = useCatalogStore(state => state.addToCart)
	return (
		<div className={styles.favorites}>
			<div className={styles.favorites__top}>
				<h2 className={styles.top__subtitle}>Избранное</h2>
			</div>
			<div className={styles.favorites__content}>
				{favorites.map(product => (
					<div key={product.id} className={styles.content__card}>
						<IoClose
							onClick={() => removeFromFav(product.id)}
							className={styles.card__fav}
						/>
						<img src={product.img} alt='sneaker' width={product.width} />
						<div className={styles.card__under}>
							<p className={styles.under__title}>{product.title}</p>
							<div className={styles.under__buy}>
								<div className={styles.buy__cost}>
									<p className={styles.cost__text}>Цена</p>
									<p className={styles.cost__cost}>{product.cost} РУБ</p>
								</div>
								<div className={styles.buy__btn}>
									<CiSquarePlus
										onClick={() => addToCart(product)}
										className={styles.btn__plus}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

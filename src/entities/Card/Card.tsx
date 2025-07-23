import { useEffect } from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import { MdFavoriteBorder } from 'react-icons/md'
import { useCatalogStore } from '../../store/store'
import styles from './Card.module.scss'

export default function Card() {
	//Dispatch
	const sneakers = useCatalogStore(state => state.products)
	const fetchProducts = useCatalogStore(state => state.fetchProducts)
	//Favorite func
	const addToFavorite = useCatalogStore(state => state.addToFavorite)
	//Cart func
	const addToCart = useCatalogStore(state => state.addToCart)
	useEffect(() => {
		try {
			fetchProducts()
		} catch (error) {
			console.log(error)
		}
	}, [fetchProducts])

	return (
		<div className={styles.card__catalog}>
			{sneakers.map(sneaker => (
				<div key={sneaker.id} className={styles.card}>
					<MdFavoriteBorder
						onClick={() => addToFavorite(sneaker)}
						className={styles.card__fav}
					/>
					<img src={sneaker.img} alt='sneaker' width={sneaker.width} />
					<div className={styles.card__under}>
						<p className={styles.under__title}>{sneaker.title}</p>
						<div className={styles.under__buy}>
							<div className={styles.buy__cost}>
								<p className={styles.cost__text}>Цена</p>
								<p className={styles.cost__cost}>{sneaker.cost} РУБ</p>
							</div>
							<div className={styles.buy__btn}>
								<CiSquarePlus
									onClick={() => addToCart(sneaker)}
									className={styles.btn__plus}
								/>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

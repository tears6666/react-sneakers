import { useEffect } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { useCatalogStore } from '../../store/store'
import styles from './Card.module.scss'

export default function Card(){
	//Catalog store hook
	const sneakers = useCatalogStore(state => state.sneakers)
	const fetchSneakers = useCatalogStore(state => state.fetchSneakers)
	useEffect(() => {
		try {
			fetchSneakers()
		} catch (error) {
			console.log('Error', error)
		}
	}, [fetchSneakers])
  return(
    <div className={styles.card__catalog}>
      {sneakers.map(sneaker => (
					<div key={sneaker.id} className={styles.card}>
						<MdFavoriteBorder className={styles.card__fav} />
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
  )
}
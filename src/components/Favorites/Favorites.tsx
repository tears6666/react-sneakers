import { IoIosArrowBack } from 'react-icons/io'
import { MdFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useCatalogStore } from '../../store/store'
import styles from './Favorites.module.scss'

export default function Favorites() {
	const favorites = useCatalogStore(state => state.favorites)
	return (
		<div className={styles.favorites}>
			<div className={styles.favorites__top}>
				<Link to={'/'}>
					<IoIosArrowBack className={styles.top__back} />
				</Link>
				<h2 className={styles.top__subtitle}>Избранное</h2>
			</div>
			<div className={styles.favorites__content}>
				{favorites.map(favorite => (
					<div key={favorite.id} className={styles.content__card}>
						<MdFavoriteBorder className={styles.card__fav} />
						<img src={favorite.img} alt='sneaker' width={favorite.width} />
						<div className={styles.card__under}>
							<p className={styles.under__title}>{favorite.title}</p>
							<div className={styles.under__buy}>
								<p className={styles.buy__text}>Цена</p>
								<p className={styles.buy__cost}>{favorite.cost} РУБ</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

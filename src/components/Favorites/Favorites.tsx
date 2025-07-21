import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useFavoriteStore } from '../../store/favStore'
import styles from './Favorites.module.scss'

export default function Favorites() {
	const favorites = useFavoriteStore(state => state.favorites)
	return (
		<div className={styles.favorites}>
			<div className={styles.favorites__top}>
				<Link to={'/'}>
					<IoIosArrowBack className={styles.top__back} />
				</Link>
				<h2 className={styles.top__subtitle}>Избранное</h2>
			</div>
			{favorites.map(favorite => (
				<div className={styles.favorites__content}>
					<div key={favorite.favId} className={styles.content__item}></div>
				</div>
			))}
		</div>
	)
}

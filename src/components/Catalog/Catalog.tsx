import { CiSearch } from 'react-icons/ci'
import Card from '../entities/Card/Card'
import styles from './Catalog.module.scss'

export default function Catalog() {
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
				<Card />
			</div>
		</div>
	)
}

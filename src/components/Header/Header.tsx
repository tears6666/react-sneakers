import { useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { SlBasket } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.jpeg'
import { useCatalogStore } from '../../store/store'
import styles from './Header.module.scss'

export default function Header() {
	const count = useCatalogStore(state => state.initialCount)
	const [isActive, setIsActive] = useState(0)
	return (
		<header className={styles.header}>
			<div className={styles.header__launch}>
				<img src={Logo} alt='logo' width={70} />
				<div className={styles.launch__aside}>
					<Link className={styles.aside__logo_link} to={'/'}>
						<h1 onClick={() => setIsActive(0)} className={styles.aside__logo}>
							React-Sneakers
						</h1>
					</Link>
					<p className={styles.aside__text}>Магазин лучших кроссовок</p>
				</div>
			</div>
			<nav className={styles.header__nav}>
				<ul className={styles.nav__list}>
					<Link to={'/basket'}>
						<SlBasket
							onClick={() => setIsActive(1)}
							className={
								isActive === 1
									? styles.list__basket_active
									: styles.list__basket
							}
						/>
					</Link>
					<p className={styles.list__count}>{count} РУБ</p>
					<Link to={'/favorites'}>
						<MdFavoriteBorder
							onClick={() => setIsActive(2)}
							className={
								isActive === 2 ? styles.list__fav_active : styles.list__fav
							}
						/>
					</Link>
				</ul>
			</nav>
		</header>
	)
}

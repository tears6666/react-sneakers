import { useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import { SlBasket } from 'react-icons/sl'
import { Modal } from '../../entities/Modal/Modal'
import Logo from '../../img/logo.jpeg'
import styles from './Header.module.scss'

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header className={styles.header}>
			<div className={styles.header__launch}>
				<img src={Logo} alt='logo' width={70} />
				<div className={styles.launch__aside}>
					<h1 className={styles.aside__logo}>React-Sneakers</h1>
					<p className={styles.aside__text}>Магазин лучших кроссовок</p>
				</div>
			</div>
			<nav className={styles.header__nav}>
				<ul className={styles.nav__list}>
					<SlBasket
						onClick={() => setIsOpen(true)}
						className={styles.list__basket}
					/>
					<MdFavoriteBorder className={styles.list__fav} />
				</ul>
			</nav>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
		</header>
	)
}

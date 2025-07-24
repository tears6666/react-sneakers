import { IoClose } from 'react-icons/io5'
import { useCatalogStore } from '../../store/store'
import styles from './Basket.module.scss'

export default function Basket() {
	//Dispatch for cart
	const cartItems = useCatalogStore(state => state.cartItems)
	const removeFromCart = useCatalogStore(state => state.removeFromCart)

	return (
		<div className={styles.basket}>
			<div className={styles.basket__top}>
				<h2 className={styles.top__subtitle}>Корзина</h2>
			</div>
			<div className={styles.basket__content}>
				{cartItems.map(item => (
					<div key={item.id} className={styles.content__card}>
						<IoClose
							onClick={() => removeFromCart(item.id)}
							className={styles.card__remove}
						/>
						<img src={item.img} alt='sneaker' width={item.width} />
						<div className={styles.card__under}>
							<p className={styles.under__text}>Цена</p>
							<p className={styles.under__cost}>{item.cost} РУБ</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

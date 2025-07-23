import { useCatalogStore } from '../../store/store'
import styles from './Basket.module.scss'

export default function Basket(){
  //Dispatch for cart
  const cartItems = useCatalogStore(state => state.cartItems)
  const removeFromCart = useCatalogStore(state => state.removeFromCart)

  return(
    <div className={styles.basket}>
      <div className={styles.basket__top}>
        <h2 className={styles.top__subtitle}>Корзина</h2>
      </div>
      <div className={styles.basket__content}>
        {cartItems.map(item =>(
          <div key={item.id} className={styles.content__cart}>
          </div>
        ))}
      </div>
    </div>
  )
}
import { useEffect, useState } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'
import type { Product } from '../../@types/types'
import styles from './Card.module.scss'

export default function Card() {
	const [sneakers, setSneakers] = useState<Product[]>([])
	useEffect(() => {
		async function fetchSneakers() {
			try {
				const res = await fetch('http://localhost:3000/sneakers')
				const data = (await res.json()) as Product[]
				setSneakers(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchSneakers()
	})

	return (
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

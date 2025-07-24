import { create } from 'zustand'
import type { IProduct, IProductState } from '../app/@types/types'

export const useCatalogStore = create<IProductState>()(set => ({
	initialCount: 0,
	products: [],
	favorites: [],
	cartItems: [],
	isLoading: true,
	errors: [],
	fetchProducts: async () => {
		const res = await fetch('http://localhost:3000/sneakers')
		const data = (await res.json()) as IProduct[]
		set({ products: data })
	},
	addToFavorite: product => {
		set(state => ({
			favorites: [...state.favorites, product],
		}))
	},
	removeFromFavorite: productId => {
		set(state => ({
			favorites: state.favorites.filter(product => product.id != productId),
		}))
	},
	addToCart: product => {
		set(state => ({
			cartItems: [...state.cartItems, product],
		}))
	},
	removeFromCart: productId => {
		set(state => ({
			cartItems: state.cartItems.filter(product => product.id != productId),
		}))
	},
	clearCart: () => {
		set({ cartItems: [] })
	},
}))
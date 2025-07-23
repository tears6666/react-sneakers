import { create } from 'zustand'

interface IProduct {
	id: number
	title: string
	cost: number
	img: string
	width: number
}

interface IProductState {
	initialCount: number
	products: IProduct[]
	cartItems: IProduct[]
	favorites: IProduct[]
	isLoading: boolean
	errors: string[]
	fetchProducts: () => void
	addToFavorite: (product: IProduct) => void
	addToCart: (product: IProduct) => void
	removeFromCart: (product: number) => void
	removeFromFavorite: (productId: number) => void
}

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
}))
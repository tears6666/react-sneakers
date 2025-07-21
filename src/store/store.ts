import { create } from 'zustand'

interface IProduct {
	id: number
	title: string
	cost: number
	img: string
	width: number
}

interface IProductState {
	products: IProduct[]
	favorites: IProduct[]
	isLoading: boolean
	errors: string[]
	fetchProducts: () => void
	addToFavorite: (product: IProduct) => void
	removeFromFavorite: (productId: number) => void
}

export const useCatalogStore = create<IProductState>()(set => ({
	products: [],
	favorites: [],
	isLoading: true,
	errors: [],
	fetchProducts: async () => {
		const res = await fetch('http://localhost:3000/sneakers')
		const data = await res.json() as IProduct[]
		set({ products: data })
	},
  addToFavorite: (product) =>{
    set((state) =>({
      favorites: [...state.favorites, product]
    }))
  },
  removeFromFavorite: (productId) =>{
    set((state) =>({
      favorites: state.favorites.filter((product) => product.id != productId)
    }))
	}
}))

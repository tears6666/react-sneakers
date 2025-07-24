export interface IProduct {
  id: number
  title: string
  cost: number
  img: string
  width: number
}

export interface IProductState {
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
  clearCart: () => void
}
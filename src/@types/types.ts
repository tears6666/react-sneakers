export interface Product{
  id: number
  title: string
  cost: number
  img: string
  width: number
}
export interface FavItem {
	favorite: Product[]
	favId: number
}
export interface Fav {
	favorites: FavItem[]
}
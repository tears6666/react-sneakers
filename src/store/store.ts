import { create } from 'zustand'

interface IProduct {
	id: number
	title: string
	cost: number
	img: string
	width: number
}
interface IProductState {
  sneakers: IProduct[]
  isLoading: boolean
  errors: string[]
  fetchSneakers: () => void
}
export const useCatalogStore = create<IProductState>()((set) => ({
  sneakers: [],
  isLoading: true,
  errors: [],
  fetchSneakers: async () =>{
    const response = await fetch('http://localhost:3000/sneakers')
    const data = await response.json() as IProduct[]
    set({sneakers: data})
  }
}))
import { create } from 'zustand';
import type { Fav, FavItem } from '../@types/types';

interface IFavoriteState extends Fav{
  favorites: FavItem[]
  addItem: (favorite: FavItem) => void
  removeItem: (favoriteId: number) => void
}
export const  useFavoriteStore = create<IFavoriteState>()((set) => ({
  favorites: [],
  addItem: (favorite) =>{
    set((state) =>({
      favorites: [...state.favorites, favorite]
    }))
  },
  removeItem: (favoriteId) =>{
    set((state) =>({
      favorites: state.favorites.filter((favorite) => favorite.favId != favoriteId)
    }))
  }
}))
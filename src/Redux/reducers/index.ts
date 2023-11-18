import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { IProduto } from './cart'

export interface IFavorite {
  favorites: WritableDraft<IProduto>[]
}

const initialState: IFavorite = {
  favorites: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<WritableDraft<IProduto>[]>) => {
      const newFavorites = action.payload
      state.favorites = []

      state.favorites.push(...newFavorites)
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      )
    }
  }
})

export const { setFavorites, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer

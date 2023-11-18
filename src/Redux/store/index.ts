import { configureStore } from '@reduxjs/toolkit'

import favoriteReducer from '../reducers'
import cartSlice from '../reducers/cart'

import { fakeApi } from '../api'
import { setupListeners } from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    cart: cartSlice,
    [fakeApi.reducerPath]: fakeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

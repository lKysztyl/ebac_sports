import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'

export interface IProduto {
  id: number
  nome: string
  preco: number
  imagem: string
}

export interface ICarts {
  carts: WritableDraft<IProduto>[]
}

const initialState: ICarts = {
  carts: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<WritableDraft<IProduto>[]>) => {
      state.carts = action.payload
    }
  }
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer

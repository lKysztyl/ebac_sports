import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Zeki',
    age: 2900
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    }
  }
})

export const { setName, setAge } = userSlice.actions
export default userSlice.reducer

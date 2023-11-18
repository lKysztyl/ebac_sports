import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduto } from '../reducers/cart'

export const fakeApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getItens: builder.query<IProduto[], void>({
      query: () => ''
    })
  })
})

export const { useGetItensQuery } = fakeApi

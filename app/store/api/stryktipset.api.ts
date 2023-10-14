import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { StryktipsetRoot } from 'types/stryktipset'

export const stryktipsetApi = createApi({
  reducerPath: 'stryktipsetApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getStryktipset: builder.query<StryktipsetRoot['draws'][0], void>({
      query: () => 'europatipset',
      transformResponse: (response: StryktipsetRoot) => response.draws[0],
    }),
    getStryktipsetByDrawNumber: builder.query<StryktipsetRoot, number>({
      query: (drawNumber) => `stryktipset/${drawNumber}`,
    }),
  }),
})

export const { useGetStryktipsetQuery, useGetStryktipsetByDrawNumberQuery } = stryktipsetApi

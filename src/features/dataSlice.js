import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const restCountriesApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    tagTypes: ['Countries'],
    reducerPath: 'restCountriesApi', //path to cache
    endpoints: (builder) => ({
        getAllCountries: builder.query({
            query: () => '/all',

        })
    }),



})

export const { useGetAllCountriesQuery } = restCountriesApi;
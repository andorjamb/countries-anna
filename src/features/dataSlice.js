import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const APIKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
console.log(APIKey)

export const restCountriesApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    tagTypes: ['Countries'],
    reducerPath: 'restCountriesApi', //path to cache
    endpoints: (builder) => ({
        getAllCountries: builder.query({
            query: () => '/all',
            //transformResponse: (response) => response.data,
        })
    })

})

export const { useGetAllCountriesQuery } = restCountriesApi;
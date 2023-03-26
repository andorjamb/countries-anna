import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';

export const restCountriesApi = createApi({
    baseQuery: 'https://restcountries.com/all',
    tagTypes: ['Countries'],
    reducerPath: 'restCountriesApi',
    endpoints: (builder) => ({
        getAllCountries: builder.query({

        })
    })
})

const initialState = {
    countriesList: []
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
       
    }

}

    //TODO: query for fetching only one country? OR

);

export const { } = countriesSlice.actions;

export default countriesSlice.reducer;
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const APIKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
console.log(APIKey)


export const restCountriesApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
    tagTypes: ['Countries'],
    reducerPath: 'restCountriesApi',
    endpoints: (builder) => ({
        getAllCountries: builder.query({
            query: () => 'all',
            transformResponse: (response) => response.data,
        })
    })

})

export const { useGetAllCountriesQuery } = restCountriesApi;

const initialState = {
    countriesList: [],
    weatherData: []
}

let countryName = ""

export const getWeather = createAsyncThunk(
    'countries/weather',
    async () => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=${APIKey}`)
        return response.data;
    }
)




export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        dummyReducer: (state, action) => { state.countries = action.payload }

    },
    extraReducers(builder) {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.weather = action.payload
        })
    },
    /*  [getWeather.fulfilled]: (state, action) => { state.weather = action.payload } */
}

);

export const { dummyReducer } = countriesSlice.actions;

export default countriesSlice.reducer;
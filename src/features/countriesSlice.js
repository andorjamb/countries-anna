import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const APIKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
console.log(APIKey)


export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countriesList: [],
        weatherData: [],
    },
    reducers: {
        setSearch: (state, action) => { state.search = action.payload },

    },

}

);

export const { setSearch } = countriesSlice.actions;

export default countriesSlice.reducer;
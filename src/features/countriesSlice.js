import { createSlice } from '@reduxjs/toolkit';

const APIKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
console.log(APIKey)


export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countryStore: [],
        weatherData: [],
    },
    reducers: {
        setSearch: (state, action) => { state.search = action.payload },
        setCountryStore: (state, action) => (state.countryStore = action.payload)

    },

}

);

export const { setSearch, setCountryStore } = countriesSlice.actions;

export default countriesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';



export const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countryStore: [],
    },
    reducers: {
        setCountryStore: (state, action) => (state.countryStore = { ...action.payload })

    },

}

);

export const { setCountryStore } = countriesSlice.actions;

export default countriesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            firstname: "",
            lastname: "",
            email: "",
        },
        isLoggedIn: false,
        favourites: []//an array of country names? country.common.name
       
    },
    reducers: {
        setUser: (state, action) => { state.user = action.payload },
        addToFavourites: (state, action) => { 
            state.favourites = state.favourites = [...state.favourites, action.payload] }
    }
})

export const { setUser, addToFavourites } = userSlice.actions;
export default userSlice.reducer;
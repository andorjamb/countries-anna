import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        favorites: [] //an array of country names? country.common.name
    },
    reducers: {
        login: (state, action) => { state.user = action.payload },
        logout: (state) => { state.user = null },
        addToFavorites: (state, action) => { state.favorites = state.favorites = [...state.favorites, action.payload] }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
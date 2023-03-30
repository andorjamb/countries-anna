import { createSlice } from "@reduxjs/toolkit";

const favourites = localStorage.getItem('Favourites') !== null ? JSON.parse(localStorage.getItem('Favourites')) : []

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    favourites: favourites,

  },
  reducers: {
    setLoggedIn: (state, action) => { state.loggedIn = action.payload },
    addFavourite(state, action) {
      state.favourites = [...state.favourites, action.payload]
      localStorage.setItem('Favourites', JSON.stringify(state.favourites))
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter((favourite) => favourite !== action.payload)
    },
    clearFavourites(state, action) {
      localStorage.removeItem('Favourites')
      state.favourites = [];
    }
  }
})

export const { setUser, addFavourite, removeFavourite, setLoggedIn, clearFavourites } = userSlice.actions;
export default userSlice.reducer;
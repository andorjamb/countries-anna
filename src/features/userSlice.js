import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    favourites: ['Italy', 'Albania']//an array of country names country.common.name

  },
  reducers: {
    setLoggedIn: (state, action) => { state.loggedIn = action.payload },
    addFavourite: (state, action) => {
      state.favourites = state.favourites = [...state.favourites, action.payload]
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter((favourite) => favourite !== action.payload)
    }
  }
})

export const { setUser, addFavourite, removeFavourite, setLoggedIn } = userSlice.actions;
export default userSlice.reducer;
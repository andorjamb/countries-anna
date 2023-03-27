import { createSlice } from "@reduxjs/toolkit";




/* createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        const user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: newUser.name
        })
      }) 
      
      
      firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(result) {
  return result.user.updateProfile({
    displayName: document.getElementById("name").value
  })
}).catch(function(error) {
  console.log(error);
});`*/


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
            state.favourites = state.favourites = [...state.favourites, action.payload]
        }
    }
})

export const { setUser, addToFavourites } = userSlice.actions;
export default userSlice.reducer;
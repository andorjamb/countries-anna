import { createSlice } from '@reduxjs/toolkit';



const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        loginOpen: false,
        registerOpen: false
    },
    reducers: {
        showLogin: (state, action) => { state.loginOpen = action.payload },
        showRegister: (state, action) => { state.registerOpen = action.payload },

    }



})

export const { showLogin, showRegister } = modalSlice.actions;

export default modalSlice.reducer;
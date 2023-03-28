import { createSlice } from '@reduxjs/toolkit';



const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        showLogin: false,
        showRegister: false
    },
    reducers: {
        toggleLogin: (state) => { state.showLogin = !state.showLogin },
        toggleRegister: (state) => { state.showRegister = !state.showRegister }
    }



})

export const { toggleLogin, toggleRegister } = modalSlice.actions;

export default modalSlice.reducer;
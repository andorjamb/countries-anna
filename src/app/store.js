import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from '../features/countriesSlice';
import modalSlice from '../features/modalSlice';
import { userSlice } from '../features/userSlice';

export const store = configureStore({
    reducer: {
        countries: countriesSlice,
        user: userSlice,
        modal: modalSlice
    },
});

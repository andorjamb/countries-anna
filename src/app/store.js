import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from '../features/countriesSlice';
import { userSlice } from '../features/userSlice';

export const store = configureStore({
    reducer: {
        countries: countriesSlice,
        user: userSlice,
    },
});

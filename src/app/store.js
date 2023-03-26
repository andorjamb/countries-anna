import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from '../features/countriesSlice';
import { userSlice } from '../features/userSlice';

export default configureStore({
    reducer: {
        countries: countriesSlice,
        user: userSlice,
    },
});

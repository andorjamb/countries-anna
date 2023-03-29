import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import countriesSlice from '../features/countriesSlice';
import { restCountriesApi } from '../features/dataSlice';
import modalSlice from '../features/modalSlice';
import userSlice from '../features/userSlice';


export const store = configureStore({
    reducer: {
        countries: countriesSlice,
        user: userSlice,
        modal: modalSlice,
        [restCountriesApi.reducerPath]: restCountriesApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(restCountriesApi.middleware),
});


setupListeners(store.dispatch);
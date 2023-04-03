import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { db, auth } from '../app/auth/firestore';
import {
    collection,
    getDoc,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
} from "@firebase/firestore";

const user = auth.currentUser;
console.log('printing from dataSlice', user.uid);

export const restCountriesApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    tagTypes: ['Countries'],
    reducerPath: 'restCountriesApi', //path to cache

    endpoints: (builder) => ({
        getAllCountries: builder.query({
            query: () => '/all',

        }),
    }),

})

export const { useGetAllCountriesQuery } = restCountriesApi;


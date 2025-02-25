import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = 'https://restcountries.com/v3.1';

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["countries"],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),

    endpoints: (builder) => ({
        getAllCountries: builder.query({
            query: () => "/all",
            providesTags: [{ type: "countries" }]
        }),
        getCountryByCode: builder.query({
            query: (code) => `alpha/${code}`,
        }),
    })
})

export const {
    useGetAllCountriesQuery,
    useGetCountryByCodeQuery
} = api;
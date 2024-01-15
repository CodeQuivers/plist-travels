import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const REACT_APP_SERVER=`https://dev.plistbooking.travel`;
const REACT_APP_SERVER=`https://dev.plistbooking.travel`;


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_API_SERVER,
    }),
    tagTypes:[],
    endpoints:(builder)=>({})
})

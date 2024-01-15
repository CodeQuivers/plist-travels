import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import flightSliceReducer from "./features/flight/flightSlice";
import paginationSliceReducer from "./features/pagination/paginationSlice";
import flightFilterSliceReducer from "./features/flight/flightFilterSlice";
import hotelSearchSliceReducer from "./features/hotel/hotelSearchSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    flight: flightSliceReducer,
    pagination: paginationSliceReducer,
    flightFilter: flightFilterSliceReducer,
    hotelSearch:hotelSearchSliceReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import flightSliceReducer from "./features/flight/flightSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    flight: flightSliceReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

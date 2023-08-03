import { apiSlice } from "../apiSlice";

const flightApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocationsFlights: builder.query({
      query: () =>
        `/getLocationsFlights?locale=English&max=5&limit=4&term=delhi`,
    }),
  }),
});

export const { useGetLocationsFlightsQuery } = flightApi;

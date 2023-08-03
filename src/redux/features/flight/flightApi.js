import { apiSlice } from "../apiSlice";

const flightApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: (term) =>
        `/getLocationsFlights?locale=English&max=5&limit=4&term=${term}`,
    }),
  }),
});

export const { useGetLocationsQuery } = flightApi;

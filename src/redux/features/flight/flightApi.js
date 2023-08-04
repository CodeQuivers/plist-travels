import { apiSlice } from "../apiSlice";

const flightApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: (term) =>
        `/getLocations?action=getLocations&lang=en&limit=5&term=${term}`,
    }),
  }),
});

export const { useGetLocationsQuery } = flightApi;

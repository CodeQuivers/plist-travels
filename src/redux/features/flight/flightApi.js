import { apiSlice } from "../apiSlice";

const flightApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: (term) => {
        return {
          url: `/getLocations`,
          params: {
            action: "getLocations",
            lang: "en",
            limit: 5,
            term: term,
          },
        };
      },
    }),

    getLocationsFlights: builder.query({
      query: (term) => {
        return {
          url: "/getLocationsFlights",
          params: {
            locale: "en",
            max: 7,
            limit: 5,
            term: term,
          },
        };
      },
    }),
  }),
});

export const { useGetLocationsQuery, useGetLocationsFlightsQuery } = flightApi;

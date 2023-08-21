import { apiSlice } from "../apiSlice";

const hotelApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHotelLocations: builder.query({
      query: (term) => {
        return {
          url: `/get_hotel_locations`,
          params: {
            lang: "en",
            limit: 5,
            term: term,
          },
        };
      },
    }),
  }),
});

export const { useGetHotelLocationsQuery } = hotelApi;

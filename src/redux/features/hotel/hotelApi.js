import { apiSlice } from "../apiSlice";
import { setHotelSearchSession } from "./hotelSearchSlice";

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
    getHotelSearchSession: builder.query({
      query: (regionId) => ({
        url: "/get_search_id",
        params: {
          regionid: regionId,
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;          
          dispatch(setHotelSearchSession(data.search_id));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetHotelLocationsQuery, useGetHotelSearchSessionQuery } = hotelApi;

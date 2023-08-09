import { apiSlice } from "../apiSlice";
import flightSlice, {
  updateIsSearchResultAvailableAction,
} from "./flightSlice";

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

    getFlighstLocations: builder.query({
      query: (term) => {
        return {
          url: "/get_flights_locations",
          params: {
            locale: "en",
            max: 7,
            limit: 5,
            term: term,
          },
        };
      },
    }),

    getFlightSearchId: builder.query({
      query: (data) => {
        const queryParams = {
          flighttype: data.flightType,
          origin: data.flightFrom.label,
          destination: data.flightTo.label,
          IATA_from: data.flightFrom.value,
          IATA_to: data.flightTo.value,
          adults: data.adults,
          childs: data.childs,
          infants: data.infants,
          cabin_class: data.cabinClass,
          departure_date: data.departureDate,
          return_date: data.returnDate,
          isDomestic: "No",
        };
        return {
          url: "/get_flight_search_id",
          params: queryParams,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            updateIsSearchResultAvailableAction({
              isSearchResultAvailable: data.isFind,
              searchId: data.search_id,
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetFlighstLocationsQuery,
  useGetFlightSearchIdQuery,
} = flightApi;

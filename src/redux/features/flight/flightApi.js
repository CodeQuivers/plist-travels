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

    getSearchId: builder.query({
      query: (data) => {
        const queryParams = {
          action: "findSearchKey",
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
          url: "/flight-search-results2",
          params: queryParams,
        };
      },
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationsFlightsQuery,
  useGetSearchIdQuery,
} = flightApi;

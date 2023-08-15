import { apiSlice } from "../apiSlice";
import { setPaginationInfoAction } from "../pagination/paginationSlice";
import flightSlice, {
  setFlightSearchResultAction,
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
          is_direct: data.isDirect ? "Yes" : "",
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

    getFlightList: builder.query({
      query: ({ searchId, sortVal, stops, airlines, price }) => {
        const params = {
          search_id: searchId,
          sortVal,
        };

        if (stops) params.Stops = stops;
        if (airlines) params.airlines = airlines;
        if (price) params.price = price;
        return {
          url: "/get_flight_list",
          params: params,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data && data?.result?.length > 0) {
            const itemPerPage = data.result[0].isReturn === "Yes" ? 3 : 5;
            const numOfPage = parseInt(
              Math.ceil(data.result.length / itemPerPage)
            );
            dispatch(
              setPaginationInfoAction({
                numOfPage: numOfPage,
                itemPerPage: itemPerPage,
              })
            );
            dispatch(
              setFlightSearchResultAction({
                items: data.result,
                numOfItems: data.result[0].totalcountfilter,
              })
            );
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getFlightFilterData: builder.query({
      query: (searchId) => {
        return {
          url: `/get_flight_filter_data`,
          params: {
            search_id: searchId,
          },
        };
      },
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetFlighstLocationsQuery,
  useGetFlightSearchIdQuery,
  useGetFlightListQuery,
  useGetFlightFilterDataQuery,
} = flightApi;

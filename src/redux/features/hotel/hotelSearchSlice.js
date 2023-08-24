import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regionId: null,
  destination: "",
  checkIn: "",
  checkOut: "",
  rooms: null,
  adults: "",
  childs: "",
  childAge: null,
  search_session: "",
  page_number:1
};

const hotelSearchSlice = createSlice({
  name: "hotelSearch",
  initialState,
  reducers: {
    setHotelSearchParams: (state, action) => {
      state.regionId = action.payload.regionId;
      state.destination = action.payload.destination;
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
      state.rooms = action.payload.rooms;
      state.adults = action.payload.adults;
      state.childs = action.payload.childs;
    },
    setHotelSearchSession: (state, action) => {
        console.log("I am inside of the setHotelSearchSession")
      state.search_session = action.payload;
    },
  },
});

export const { setHotelSearchParams, setHotelSearchSession } =
  hotelSearchSlice.actions;

export default hotelSearchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchResultAvailable: "",
  searchId: null,
  searchResult: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    updateIsSearchResultAvailableAction: (state, action) => {
      state.isSearchResultAvailable = action.payload.isSearchResultAvailable;
      state.searchId = action.payload.searchId;
    },
    setFlightSearchResultAction: (state, action) => {
      state.searchResult = action.payload;
    },
    filterSearchResultAction: (state, action) => {},
  },
});

export const {
  updateIsSearchResultAvailableAction,
  setFlightSearchResultAction,
  filterSearchResultAction,
} = flightSlice.actions;
export default flightSlice.reducer;

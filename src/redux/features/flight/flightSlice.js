import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchResultAvailable: "",
  searchId: null,
  searchResult: [],
  totalSearchResult: 0,
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
      state.searchResult = action.payload.items;
      state.totalSearchResult = action.payload.numOfItems;
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

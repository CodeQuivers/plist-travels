import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchResultAvailable: "",
  searchId: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    updateIsSearchResultAvailableAction: (state, action) => {
      state.isSearchResultAvailable = action.payload.isSearchResultAvailable;
      state.searchId = action.payload.searchId;
    },
  },
});

export const { updateIsSearchResultAvailableAction } = flightSlice.actions;
export default flightSlice.reducer;

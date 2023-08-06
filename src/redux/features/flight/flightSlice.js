import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchResultAvailable: true,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    updateIsSearchResultAvailable: (state, action) => {
      state.isSearchResultAvailable = action.payload;
    },
  },
});

export const { updateIsSearchResultAvailable } = flightSlice.actions;
export default flightSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfPage: 1,
  itemPerPage: 1,
  currentPageNumber: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPaginationInfoAction: (state, action) => {
      state.numOfPage = action.payload.numOfPage;
      state.itemPerPage = action.payload.itemPerPage;
    },
    setCurrentPageNumberAction: (state, action) => {
      state.currentPageNumber = action.payload;
    },
  },
});

export const { setPaginationInfoAction, setCurrentPageNumberAction } =
  paginationSlice.actions;

export default paginationSlice.reducer;

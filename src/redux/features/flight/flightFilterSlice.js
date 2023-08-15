import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: "",
  stopages: [],
  airlines: [],
};

const flightFilterSlice = createSlice({
  name: "flightFilter",
  initialState,
  reducers: {
    setPriceFilterAction: (state, action) => {
      state.price = action.payload;
    },
    setStopageFilterAction: (state, action) => {
      state.stopages = dataMutation(
        state.stopages,
        action.payload.key,
        action.payload.isSelected
      );
    },
    setArilinesFilterAction: (state, action) => {
      state.airlines = dataMutation(
        state.airlines,
        action.payload.key,
        action.payload.isSelected
      );
    },
  },
});

export const {
  setPriceFilterAction,
  setStopageFilterAction,
  setArilinesFilterAction,
} = flightFilterSlice.actions;

export default flightFilterSlice.reducer;

// ---------Helper Function---------------------
const dataMutation = (dataList, itemValue, isSelected) => {
  let data = [...dataList];
  if (isSelected) data.push(itemValue);
  else data = data.filter((val) => val !== itemValue);
  return data;
};

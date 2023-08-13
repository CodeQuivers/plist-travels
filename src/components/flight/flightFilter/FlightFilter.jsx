import React, { useState } from "react";
import MultiRangeSlider from "../rangeSlider/MultiRangeSlider";
import FilterRadioButton from "../../tours/tourSearchResult/FilterRadioButton";
import { useGetFlightFilterDataQuery } from "../../../redux/features/flight/flightApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useDispatch, useSelector } from "react-redux";
import {
  setArilinesFilterAction,
  setStopageFilterAction,
} from "../../../redux/features/flight/flightFilterSlice";

const FlightFilter = ({ searchId }) => {
  const {
    data: filterData,
    isLoading,
    isError,
  } = useGetFlightFilterDataQuery(searchId || skipToken);
  const { minprice, maxprice, airlines, stopages } = filterData || {};
  const { stopages: sotpagesToFilter, airlines: airlinesToFilter } =
    useSelector((state) => state.flightFilter);

  //   Button content for airlines
  let airlineContent = null;
  if (airlines?.length > 0) {
    airlineContent = airlines.map((item, idx) => (
      <FilterRadioButton
        key={idx}
        code={item.airline_code}
        setIsSelected={setArilinesFilterAction}
        text={`${item.name} (${item.carriercount})`}
      />
    ));
  }

  let stopageContent = null;
  if (stopages?.length > 0) {
    stopageContent = stopages.map((item, idx) => (
      <FilterRadioButton
        key={idx}
        code={item.max_stops}
        setIsSelected={setStopageFilterAction}
        text={`${item.max_stops} stop (${item.maxstopcount})`}
      />
    ));
  }
  console.log("min price max price", minprice, maxprice);

  const handleOnClick = () => {
    console.log(sotpagesToFilter);
    console.log(airlinesToFilter);
  };
  return (
    <div>
      <div className="w-[255px] grad-border-olc-8">
        <div className="h-[66px] p-5 border-b-2 border-gray-300">
          <p className="font-medium">Filters</p>
        </div>
        <div className="mx-5">
          <p className="my-4 text7F8FA4">Flight By Price</p>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
          <hr className="mt-4 mb-5" />
        </div>
        <div className="mx-5">
          <p className="mb-2 text7F8FA4">Flight Stops</p>
          {stopageContent}
          <hr className="my-5" />
        </div>
        <div className="mx-5">
          <p className="mb-2 text7F8FA4">Flight By Airline</p>
          {airlineContent}
          <hr className="my-5" />
          <button
            onClick={handleOnClick}
            className="w-[215px] mb-3 h-9 old-logo-color rounded-md text-white font-bold dmsan-font"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;

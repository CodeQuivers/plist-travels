import React, { useState } from "react";
import Select from "react-dropdown-select";
import sortByIcon from "../../assets/image/hotel/sortByIcon.svg";
import ChainaSouthern from "../../assets/image/flight/images/ChainaSouthern.png";
import moveRight from "../../assets/image/flight/icons/move-right.svg";
import Pagination from "../../components/flight/Pagination";
import MultiRangeSlider from "../../components/flight/rangeSlider/MultiRangeSlider";
import FilterRadioButton from "../../components/tours/tourSearchResult/FilterRadioButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetFlightListQuery } from "../../redux/features/flight/flightApi";
import TripCard from "./searcResult/TripCard";
import FlightFilter from "./flightFilter/FlightFilter";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const FlightSearchResults = () => {
  const { searchResult, searchId, totalSearchResult } = useSelector(
    (state) => state.flight
  );
  const [queryParams, setQueryParams] = useState({
    searchId,
    sortVal: "price_ASC",
  });
  const [sortBy, setSortBy] = useState("");
  const [sortInDescendingOrder, setSortInDescendingOrder] = useState("DESC");
  const {
    price: priceRangeToFilter,
    stopages: sotpagesToFilter,
    airlines: airlinesToFilter,
  } = useSelector((state) => state.flightFilter);

  const {
    data: flights,
    isLoading,
    isError,
  } = useGetFlightListQuery(queryParams || skipToken);

  let content = null;
  if (!isError && searchResult?.length >= 0) {
    content = searchResult.map((item, idx) => (
      <TripCard key={idx} tripInfo={item} />
    ));
  }
  const options = [
    {
      value: "price",
      label: "Sort By Price",
    },
    {
      value: "airlines",
      label: "Sort by Airline",
    },
    {
      value: "duration",
      label: "Sort by Duration",
    },
  ];
  const customStyles = {
    border: "none",
    outline: "none",
    fontSize: "14px",
  };
  const setParamsForFilterAndSortby = ({ sortby, sortin }) => {
    const isTrue = sortin ? sortin : sortInDescendingOrder;
    const stops =
      sotpagesToFilter.length > 0 ? sotpagesToFilter.join(",") + "," : "";
    const airlines =
      airlinesToFilter.length > 0 ? airlinesToFilter.join(",") + "," : "";
    const sortVal = `${sortby ? sortby : sortBy}_${isTrue}`;
    const queryData = {
      searchId,
      sortVal,
      stops,
      airlines,
      price: priceRangeToFilter,
      sessionId: Date.now(),
    };
    setQueryParams(queryData);
  };

  const sortSearchRsultInOrder = () => {
    const sortInString = sortInDescendingOrder === "DESC" ? "ASC" : "DESC";
    setSortInDescendingOrder(sortInString);
    setParamsForFilterAndSortby({ sortin: sortInString });
  };
  const sortSearchResultByType = (selectedValue) => {
    setSortBy(selectedValue[0].value);
    setParamsForFilterAndSortby({ sortby: selectedValue[0].value });
  };
  return (
    <>
      <div className="flex gap-10 text-sm">
        {/* filters */}
        <FlightFilter searchId={searchId} />
        <div className=" w-[875px] ">
          <div className="border-b border-t border-x border-x-indigo-700 border-t-indigo-700 py-4">
            <div className="flex px-4 justify-between items-center">
              <div>
                <h4 className="searchResultsFont">
                  Search Results
                  <span className="text-[#66768E] text-sm">
                    {" "}
                    ({totalSearchResult})
                  </span>
                </h4>
              </div>
              <div className="flex  border border-[#E6E8EC] px-2 divide-x-2  rounded-t-md">
                <Select
                  options={options}
                  values={[
                    {
                      value: 1,
                      label: "Sort By Hotel",
                    },
                  ]}
                  style={customStyles}
                  dropdownHandle={false}
                  searchable={false}
                  className="!w-[140px] py-1"
                  onChange={sortSearchResultByType}
                />
                <div className="flex justify-center items-center">
                  <button onClick={sortSearchRsultInOrder} className="p-2">
                    <img
                      className={sortInDescendingOrder ? "" : "rotate-180"}
                      src={sortByIcon}
                      alt="sort by high or low photo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Round tip 1 */}

          {content}
        </div>
      </div>
      {/* pagination */}
      <div className="pt-10">
        <Pagination />
      </div>
    </>
  );
};

export default FlightSearchResults;

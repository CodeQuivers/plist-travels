import React from "react";
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

const FlightSearchResults = () => {
  const { searchResult, searchId, totalSearchResult } = useSelector(
    (state) => state.flight
  );

  const {
    data: flights,
    isLoading,
    isError,
  } = useGetFlightListQuery({ searchId, sortVal: "price_ASC" });
  let content = null;
  if (!isError && searchResult?.length >= 0) {
    content = searchResult.map((item, idx) => (
      <TripCard key={idx} tripInfo={item} />
    ));
  }
  const options = [
    {
      value: 1,
      label: "Sort By Hotel",
    },
    {
      value: 2,
      label: "Price: Low to High",
    },
    {
      value: 3,
      label: "Price: High to Low",
    },
    {
      value: 4,
      label: "Price: Low to High",
    },
    {
      value: 5,
      label: "Price: High to Low",
    },
  ];
  const customStyles = {
    border: "none",
    outline: "none",
    fontSize: "14px",
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
                  onChange={(value) => console.log(value)}
                />
                <img className="pl-2 pr-1 py-1" src={sortByIcon} alt="" />
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

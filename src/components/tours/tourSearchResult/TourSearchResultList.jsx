import React from "react";
import Select from "react-dropdown-select";
import DoubleArrowIcon from "../../../assets/image/tours/icons/DoubleArrow.svg";
import SearchResultListItem from "./SearchResultListItem";

const TourSearchResultList = () => {
  const options = [
    {
      value: 1,
      label: "Short By Activity",
    },
    {
      value: 2,
      label: "Short by Popularity",
    },
    {
      value: 3,
      label: "Short by New",
    },
  ];
  return (
    <div className="md:w-[875px] w-3/5 blue-border-with-radius">
      {/* Search Result List Header */}
      <div className="w-full flex justify-between px-5 pt-5 items-center">
        <h1 className="text-base font-medium text-[#334150] text-start">
          Search Results
          <span className="ml-1 text-xs">(126)</span>
        </h1>
        <div className="flex items-center border rounded">
          <div className="px-4 py-1 border-r">
            <Select
              style={{
                border: "none",
                padding: "0",
              }}
              options={options}
              placeholder="Short By Activity"
            />
          </div>
          <div className="px-4 py-1">
            <button className="w-[16px] h-[16px]">
              <img src={DoubleArrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* divider */}
      <hr className="my-4 w-full" />
      {/* Searh Result List Items */}
      <div className="w-full px-5 flex flex-col items-center pt-5 gap-5">
        <SearchResultListItem/>
        <SearchResultListItem/>
        <SearchResultListItem/>
        <SearchResultListItem/>
        <SearchResultListItem/>
        <SearchResultListItem/>
        <SearchResultListItem/>
      </div>
    </div>
  );
};

export default TourSearchResultList;

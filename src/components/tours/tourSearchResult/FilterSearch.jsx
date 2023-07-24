import React from "react";

import Divider from "../Divider";
import searchIcon from "../../../assets/image/tours/icons/searchIcon.svg";
import FilterRadioButton from "./FilterRadioButton";

const FilterSearch = () => {
  return (
    <div>
      <div className="md:w-[255px] w-1/5 blue-border-with-radius flex flex-col justify-center items-center">
        <div className="w-full justify-between px-5 pt-5 items-center">
          <h1 className="text-base font-medium text-[#334150] text-start">
            Filters
          </h1>
        </div>
        <hr className="my-4 w-full" />
        <div className="flex flex-col justify-center items-center space-y-5">
          {/* Search by activity */}
          <div className="w-11/12 flex gray-border items-center gap-4">
            <input
              className="max-w-[162px] border-r p-2 outline-none"
              type="text"
              placeholder="Search By Activity"
            />
            <div className="flex justify-center">
              <img src={searchIcon} className="w-4 h-4" alt="" />
            </div>
          </div>

          {/* Price Range */}
          <div className="w-11/12 flex flex-col gap-3">
            <h2 className="text-[#7F8FA4]">Price Range</h2>
            <div className="flex justify-between items-center">
              <input
                type="number"
                className="max-w-[96px] border gray-border p-2 outline-none"
              />
              <hr className="bg-black w-2 h-0.5" />
              <input
                type="number"
                className="max-w-[96px] border gray-border p-2 outline-none"
              />
            </div>
          </div>

          <hr className="w-11/12 p-1" />

          {/* Filter by Duration */}
          <div className="w-11/12">
            <h2 className="text-[#7F8FA4]">Filter By Duration</h2>
            <div className="my-2">
              <FilterRadioButton text={"Half-day morning (11)"} />
              <FilterRadioButton text={"Full day (7)"} />
              <FilterRadioButton text={"Evening (2)"} />
            </div>
          </div>

          <hr className="w-11/12 p-1" />

          {/* Category */}
          <div className="w-11/12">
            <h2 className="text-[#7F8FA4]">Filter By Duration</h2>
            <div className="my-2">
              <FilterRadioButton text={"Art & culture (10)"} />
              <FilterRadioButton text={"City tours (6)"} />
              <FilterRadioButton text={"Half-day afternoon (6)"} />
              <FilterRadioButton
                text={"Shows, sports and special events (1)"}
              />
            </div>
          </div>
        </div>
        <hr className="my-4 w-full" />

        {/* Applyl filter button */}
        <div className="w-11/12 py-5">
          <button className="w-full h-8 tour-bg rounded-md">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;

import React from "react";
import Select from "react-dropdown-select";
import DoubleArrowIcon from "../../../assets/image/tours/icons/DoubleArrow.svg";
import searchResutItems1 from "../../../assets/image/tours/SearchListItems/searchResutItems1.png";
import { FaRegHeart } from "react-icons/fa6";

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
      <div className="w-full px-5 flex flex-col items-center pt-5">
        <div className="flex justify-between gap-3">
          <div className="relative w-4/12">
            <img src={searchResutItems1} alt="" />
            <button className="absolute top-3 right-3 bg-white p-1 rounded-lg">
              <FaRegHeart size={20} />
            </button>
          </div>
          <div className="w-2/3 space-y-1.5">
            <h3 className="text-base fs-medium grad-text-olc">Cycle Tour of Old or New Delhi (Half-day morning)</h3>
            <h6 className="text-xs fs-semibold text-[#66768E]">Delhi and NCR, India</h6>
            <p className="search-result-item-p">
              You are invited to become a part of the unique mix of colours,
              smells, sounds, tastes and unforgettable images. Take the tour
              and  sounds, tastes and unforgettable images. Take the tour
              and
            </p>
          </div>
          <div className="border-r border-[#E1E8EE]"></div>
          <div className="w-1/4 flex flex-col items-center space-y-2">
            <div >
              <p className="text-sm text-[#66768E]">
                Price <span className="text-base fs-medium text-black">$250</span> <span className="text-xs">per/person</span>
              </p>
            </div>
            <div>
              <button className="w-[200px] old-logo-color rounded py-2 px-12 text-sm fs-bold text-white">Book Now</button>
            </div>
            <div>
              <button className="w-[200px] py-2 gard-border-olc text-sky-600 px-16 bg-white text-sm fs-bold">Details</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <img src={searchResutItems1} alt="" />
            <button className="absolute top-3 right-3 bg-white p-1 rounded-lg">
              <FaRegHeart size={20} />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="relative">
            <img src={searchResutItems1} alt="" />
            <button className="absolute top-3 right-3 bg-white p-1 rounded-lg">
              <FaRegHeart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourSearchResultList;

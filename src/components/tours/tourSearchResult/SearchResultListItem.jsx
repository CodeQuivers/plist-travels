import React from "react";

import searchResutItems1 from "../../../assets/image/tours/SearchListItems/searchResutItems1.png";
import { FaRegHeart } from "react-icons/fa6";

const SearchResultListItem = () => {
  return (
    <div>
      <div className="flex justify-between gap-3">
        <div className="relative w-4/12">
          <img src={searchResutItems1} alt="" />
          <button className="absolute top-3 right-3 bg-white p-1 rounded-lg">
            <FaRegHeart size={20} />
          </button>
          <span className="absolute bottom-3 left-3 py-1 px-2 rounded text-sm text-[#23262F] font-normal bg-white grad-border-olc">
            ART & CULTURE
          </span>
        </div>
        <div className="w-2/3 space-y-1.5">
          <h3 className="text-base fs-medium grad-text-olc">
            Cycle Tour of Old or New Delhi (Half-day morning)
          </h3>
          <h6 className="text-xs fs-semibold text-[#66768E]">
            Delhi and NCR, India
          </h6>
          <p className="search-result-item-p">
            You are invited to become a part of the unique mix of colours,
            smells, sounds, tastes and unforgettable images. Take the tour and
            sounds, tastes and unforgettable images. Take the tour and
          </p>
        </div>
        <div className="border-r border-[#E1E8EE]"></div>
        <div className="w-1/4 flex flex-col items-center space-y-2">
          <div>
            <p className="text-sm text-[#66768E]">
              Price{" "}
              <span className="text-base font-medium text-black">$250</span>{" "}
              <span className="text-xs">per/person</span>
            </p>
          </div>
          <div>
            <button className="w-[200px] old-logo-color rounded py-2 px-12 text-sm font-bold text-white">
              Book Now
            </button>
          </div>
          <div>
            <button className="w-[200px] py-2 grad-border-olc text-sky-600 px-16 bg-white text-sm font-bold">
              Details
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-5 gray-divider" />
    </div>
  );
};

export default SearchResultListItem;

import React from "react";
import { FaBed } from "react-icons/fa";
import { BiSolidCalendar } from "react-icons/bi";

const SearchTour = () => {
  return (
    <div className="xl:container mx-auto mt-20 px-12">
    <div
      className="
        lg:mx-0
        border-[1px]
        rounded-[24px]
        border-[#287DFA]
        py-16
        md:px-4
        lg:px-0
        flex
        justify-center
        items-center
        bg-[#FCFCFD]
    "
    >
      <div
        className="
            w-full
            py-5
            bg-white
            flex 
            justify-center
            items-center
        "
      >
        <form action="">
          <div className="w-full flex flex-wrap justify-center md:space-x-0 gap-8 lg:gap-0 lg:space-x-20">
            {/* destination input */}
            <div className="
            w-[265px]
            h-[86px]
            ">
              <label htmlFor="" className="block mb-2.5 fs-base fw-medium">
                Destination
              </label>
              <div
                className="
              border-[1px]
              rounded-[4px]
              border-gray-200
              px-5
              py-2.5
              flex 
              justify-center
              items-center
              text-sm
              "
              >
                <FaBed
                  style={{ color: "#7B7B7B" }}
                  className="
                text-3xl
                pr-1.5"
                />
                <input
                  className="
                    outline-none
                  "
                  type="text"
                  placeholder="Delhi and NCR, India"
                />
              </div>
            </div>
            <div className="
            w-[265px]
            h-[86px]
            ">
              <label htmlFor="" className="block mb-2.5 fs-base fw-medium">
                Destination
              </label>
              <div
                className="
              border-[1px]
              rounded-[4px]
              border-gray-200
              px-5
              py-2.5
              flex 
              justify-center
              items-center
              text-sm
              "
              >
                <FaBed
                  style={{ color: "#7B7B7B" }}
                  className="
                text-3xl
                pr-1.5"
                />
                <input
                  className="
                    outline-none
                  "
                  type="text"
                  placeholder="Delhi and NCR, India"
                />
              </div>
            </div>
            <div className="
            w-[265px]
            h-[86px]
            ">
              <label htmlFor="" className="block mb-2.5 fs-base fw-medium">
                Destination
              </label>
              <div
                className="
              border-[1px]
              rounded-[4px]
              border-gray-200
              px-5
              py-2.5
              flex 
              justify-center
              items-center
              text-sm
              "
              >
                <FaBed
                  style={{ color: "#7B7B7B" }}
                  className="
                text-3xl
                pr-1.5"
                />
                <input
                  className="
                    outline-none
                  "
                  type="text"
                  placeholder="Delhi and NCR, India"
                />
              </div>
            </div>
            {/* search button */}
            
            <div className="  w-[265px]
            h-[86px] flex flex-column justify-center items-end ">
              <button
              className="
              px-20 
              py-3.5 
              text-white
              rounded
              search-now-button-bg
              "
              >Search Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SearchTour;

import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { FaBed } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import bedBlackIcon from "../../assets/image/tours/icons/bed-black.svg";
import calenderBlackIcon from "../../assets/image/tours/icons/calender-black.svg";
import Select from "react-dropdown-select";

const SearchTour = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const options = [
    {
      value: 1,
      label: "1 Room(s) - 1 Guest(s)",
    },
    {
      value: 2,
      label: "1 Room(s) - 2 Guest(s)",
    },
    {
      value: 3,
      label: "2 Room(s) - 4 Guest(s)",
    },
  ];

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
              <div className="w-[265px] h-[86px] flex flex-col justify-end">
                <label htmlFor="" className="block mb-2.5 fs-base fw-medium">
                  Destination
                </label>
                <div
                  className="
                  w-[265px]
                    h-[42px]
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
                  {/* <FaBed style={{ color: "#7B7B7B" }} className=" text-3xl pr-1.5" /> */}
                  <img
                    src={bedBlackIcon}
                    className="w-[20px] h-[14px] pr-1.5"
                    alt=""
                  />
                  <input
                    className="outline-none p-0"
                    type="text"
                    placeholder="Delhi and NCR, India"
                  />
                </div>
              </div>
              <div className="w-[265px] h-[86px] flex flex-col justify-end">
                <label htmlFor="" className="block mb-2.5 fs-base fw-medium">
                  Travel Date
                </label>
                <div
                  className="
                    w-[265px]
                    h-[42px]
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
                  {/* <FaCalendarAlt style={{ color: "#7B7B7B" }} className="text-2xl pr-1.5"/> */}
                  <img
                    src={calenderBlackIcon}
                    className="w-[20px] h-[14px]  pr-1.5"
                    alt=""
                  />
                  <ReactDatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    isClearable={true}
                    placeholderText="2023/06/27 - 2023/06/29"
                    todayButton="TODAY"
                    monthsShown={2}
                  />
                </div>
              </div>
              <div className="w-[265px]h-[86px] flex flex-col justify-end">
                <label htmlFor="" className="block mb-2.5 fs-base fw-medium">
                  Passengers
                </label>
                <div
                  className="
                    w-[265px]
                    h-[42px]
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
                  <Select
                    style={{
                      border: "none",
                      padding: "0",
                    }}
                    options={options}
                    placeholder="1 Room(s) - 1 Guest(s)"
                  />
                </div>
              </div>
              {/* search button */}

              <div className="w-[265px] h-[86px] flex flex-col justify-end ">
              
                  <button
                  className="
                  w-[250px]
                  h-[42px]
                    px-20 
                    text-white
                    rounded
                    search-now-button-bg
                    text-center
                  "
                >
                  Search Now
                </button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchTour;

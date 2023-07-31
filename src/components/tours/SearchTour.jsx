import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { FaBed } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import bedBlackIcon from "../../assets/image/tours/icons/bed-black.svg";
import calenderBlackIcon from "../../assets/image/tours/icons/calender-black.svg";
import Select from "react-dropdown-select";

import "./SearchTour.css";

const SearchTour = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const options = [
    {
      value: 1,
      label: "1 adult",
    },
    {
      value: 2,
      label: "2 adult",
    },
    {
      value: 3,
      label: "3 adult",
    },
  ];

  return (
    <div className="tour-search-box w-[1170px] mx-auto mt-20 py-16 border rounded-3xl border-[#287DFA] bg-[#FCFCFD]">
      <div className="w-full flex justify-center gap-5 bg-white px-9 py-5">
        <div className="flex gap-4">
          <div className="w-[250px] flex flex-col gap-1.5">
            <lable className="text-base font-semibold text-[#0D233E]">
              Destination
            </lable>
            <div className="flex items-center gap-1.5 gray-border px-3 py-3">
              <img src={bedBlackIcon} className="w-[20px] h-[14px]" alt="" />
              <input
                className="text-sm placeholder-[#0D233E] outline-none"
                type="text"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <lable className="text-base font-semibold text-[#0D233E]">
              Travel Date
            </lable>
            <div className="flex items-center gap-1.5 gray-border px-3 py-3 text-sm">
              <img
                src={calenderBlackIcon}
                className="w-[20px] h-[14px]"
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
          <div className="w-[250px] flex flex-col gap-1.5">
            <lable className="text-base font-semibold text-[#0D233E]">
              Passengers
            </lable>
            <div className="w-full flex text-sm mas-ran items-center gap-1.5 gray-border px-3 py-3">
              <Select
                options={options}
              />
            </div>
          </div>
        </div>
        <div className="w-[250px] flex items-end" >
          <div className="w-full">
          <button className="old-logo-color text-sm font-semibold py-3.5 px-20 text-white rounded">
            Search Now
          </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTour;

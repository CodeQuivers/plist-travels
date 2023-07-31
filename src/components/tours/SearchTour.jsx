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
    <div className="w-[1170px] mx-auto mt-20 py-16 border rounded-3xl border-[#287DFA] bg-[#FCFCFD]">
      <div className="w-full flex gap-5 bg-white px-28 py-5">
        <div className="w-[70%] flex gap-4">
          <div className="flex flex-col gap-1.5">
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
            <div className="flex items-center gap-1.5 gray-border px-3 py-3">
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
          <div className="flex flex-col gap-1.5">
            <lable className="text-base font-semibold text-[#0D233E]">
              Passengers
            </lable>
            <div className="flex items-center gap-1.5 gray-border px-3 py-3">
              <Select options={options} />
            </div>
          </div>
        </div>
        <div className="w-1/5">
          <button className="old-logo-color text-sm font-semibold py-4 px-20 text-white rounded">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTour;

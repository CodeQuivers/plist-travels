import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import Select from "react-dropdown-select";

import bedBlackIcon from "../../../assets/image/tours/icons/bed-black.svg";
import calenderBlackIcon from "../../../assets/image/tours/icons/calender-black.svg";


const TourDetailBookNow = () => {
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
    <div className="grad-border-olc flex flex-col gap-7 px-8 py-8 ">
      <div className="flex flex-col gap-5">
        {/* Destination field */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="text-normal font-medium">
            Destination
          </label>
          <div className=" w-full border rounded-sm gray-border py-2.5 px-4 flex items-center text-sm">
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
        {/* Travel Date */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="text-normal font-medium">
            Check In - Check Out
          </label>
          <div className=" w-full border rounded-sm gray-border py-2.5 px-4 flex items-center text-sm">
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

        {/* Number of guest */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="text-normal font-medium">
            Check In - Check Out
          </label>
          <div className="w-full border rounded-sm gray-border py-1 px-4 flex  items-center text-sm">
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
      </div>
      <div className="w-full">
        <button className="w-full rounded old-logo-color text-base font-bold text-white py-2">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourDetailBookNow;

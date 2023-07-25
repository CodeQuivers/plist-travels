import ReactDatePicker from "react-datepicker";
import Select from "react-dropdown-select";
import { useState } from "react";

import bedBlackIcon from "../../../assets/image/tours/icons/bed-black.svg";
import calenderBlackIcon from "../../../assets/image/tours/icons/calender-black.svg";
import { AiFillStar } from "react-icons/ai";
import { HiBadgeCheck } from "react-icons/hi";

const HotelDetailsBookNow = () => {
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
    <div className="border-gradientBox flex flex-col gap-7 !px-8 !py-8 ">
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
          <label htmlFor="">Check In - Check Out</label>
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
              className="w-[250px] focus:outline-none cursor-pointer "
              placeholderText="2023/06/27 - 2023/06/29"
              todayButton="TODAY"
              monthsShown={2}
            />
          </div>
        </div>

        {/* Number of guest */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="text-normal font-medium">
            Guests
          </label>
          <div className="w-full border rounded-sm gray-border py-1 px-4 flex  items-center text-sm">
            <Select
              style={{
                border: "none",
                left: "-15px",
                width: "305px",
              }}
              searchable={false}
              dropdownHandle={false}
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
      <div className="flex justify-center items-center gap-2">
        <span className="flex gap-2 mt-0.5">
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#FFB900]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <AiFillStar className="text-[#E1E8EE]" />
          <AiFillStar className="text-[#E1E8EE]" />
        </span>
        <span className="text-[#7F8FA4] text-xs mt-0.5">(23 Reviews)</span>
        <span>
          <HiBadgeCheck className="text-[#43B324]" size={25} />
        </span>
      </div>
    </div>
  );
};

export default HotelDetailsBookNow;

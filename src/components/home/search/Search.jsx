import { useState } from "react";
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./search.css";

const HotelSearch = () => {
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
    <div className="max-md:px-5 w-[1170px] mx-auto">
      <div className="w-full lg:flex max-md:space-y-5 justify-around  border-[#1066B5] shadow-2xl shadow-[#1065b517] mt-14 border  rounded-2xl flex flex-col">
        <div className="flex justify-start gap-[6px] mx-8 mt-8 ">
          <button className="search-category border border-[#1066B5]">
            Hotels / Stays
          </button>
          <button className="search-category1 border border-[#1066B5]">
            Flights
          </button>
          <button className="search-category1 border border-[#1066B5]">
            Tours
          </button>
          <button className="search-category1 border border-[#1066B5]">
            Transfers
          </button>
          <button className="search-category1 border border-[#1066B5] w-[209px]">
            Travel Packages
          </button>
        </div>
        <hr className="border-blue-500 " />
        <div className="flex items-center justify-center gap-[37px] m-8 ">
          <div className="w-[250px] ">
            <h5>Destination</h5>
            <Select
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                color: "blue",
                fontSize: "16px",
              }}
              className="mt-2 pl-10  border !border-[#808996a9] h-12 rounded"
              options={options}
              placeholder=" Total Passengers"
            />
          </div>
          <div className="w-[250px]">
            <h5 className="font-semibold"> Check In - Check Out</h5>
            <div className="mt-2 search-border">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true}
                placeholderText="2023/06/27 - 2023/06/29"
                className="custom-datepicker"
                todayButton="TODAY"
                monthsShown={2}
              />
            </div>
          </div>
          <div className="w-[250px]">
            <h5 className="font-medium">Guests</h5>
            <div>
              <Select
                style={{
                  border: "1px solid red",
                  borderRadius: "5px",
                  color: "black",
                  fontSize: "16px",
                  paddingLeft: "10px",
                }}
                className="mt-2 pl-10 text-black   border !border-[#808996a9]  h-12 rounded"
                options={options}
                placeholder="1 Room(s) - 1 Guest(s)"
              />
            </div>
          </div>
          <div className="w-[250px]">
            <button
              className="defaultColor w-[250px] border py-2.5 mt-7 text-white text-lg font-medium rounded-lg"
              type="submit"
            >
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;

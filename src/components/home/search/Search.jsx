import { useState } from "react";
import Select from "react-dropdown-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DropDown from "./DropDown";
import FlightFrom from "../../../assets/image/flight/icons/FlightFrom.png";
import depature from "../../../assets/image/flight/icons/depature.png";
import flightTo from "../../../assets/image/flight/icons/flightTo.png";
import returnCalender from "../../../assets/image/flight/icons/returnCalender.png";
import hotel from "../../../assets/image/home/bed-blue.png";
import transfer from "../../../assets/image/home/car-white.png";
import flight from "../../../assets/image/home/flight-white.png";
import tours from "../../../assets/image/home/globe-white.png";
import "./search.css";

const HotelSearch = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [tab, setTab] = useState(1);
  const [startDate, endDate] = dateRange;

  const [startsDate, setStartDate] = useState(new Date());
  const [pickUpTime, setPickUpTime] = useState(new Date());
  console.log("pickUpTime", pickUpTime);
  const [returnTime, setReturnTime] = useState(new Date());
  console.log("returnTime", returnTime);

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
        <div className="flex justify-start gap-[6px] mx-8 mt-8">
          {/* Hotel Serach */}
          <button
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
            className={
              tab === 1
                ? "search-category border border-[#1066B5] flex items-center gap-[6px]"
                : "search-category1 flex items-center gap-[6px] "
            }
          >
            <img src={hotel} alt="" />
            <span>Hotel/Flight</span>
          </button>

          {/*  Flight Search */}
          <button
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
            className={
              tab === 2
                ? "search-category border border-[#1066B5]  flex items-center gap-[6px]"
                : "search-category1  flex items-center gap-[6px]"
            }
          >
            <img src={flight} alt="" />
            <span>Flights</span>
          </button>

          {/* Tour Search */}
          <button
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setTab(3);
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
            className={
              tab === 3
                ? "search-category border border-[#1066B5] flex items-center gap-[6px]"
                : "search-category1 flex items-center gap-[6px]"
            }
          >
            <img src={tours} alt="" />
            <span>Tours</span>
          </button>

          {/* Transfer Search */}
          <button
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setTab(4);
            }}
            data-toggle="tab"
            href="#link4"
            role="tablist"
            className={
              tab === 4
                ? "search-category border border-[#1066B5] flex items-center gap-[6px]"
                : "search-category1 flex items-center gap-[6px]"
            }
          >
            <img src={transfer} alt="" />
            <span>Transfers</span>
          </button>

          {/* Vacation Package */}
          <button
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              setTab(5);
            }}
            data-toggle="tab"
            href="#link5"
            role="tablist"
            className={
              tab === 5
                ? "search-category border border-[#1066B5] w-[209px]"
                : "search-category1 w-[209px]"
            }
          >
            Travel Packages
          </button>
        </div>
        <hr className="border-blue-500 " />

        {/* Hotel Search */}
        <div
          className={
            tab === 1
              ? "flex items-center justify-center gap-[37px] m-8 swing-in-top-fwd"
              : "hidden"
          }
          id="link1"
        >
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

        {/* Flight Search */}

        <div
          className={
            tab === 2
              ? "flex items-center justify-center gap-[37px] m-8 swing-in-top-fwd"
              : "hidden"
          }
          id="link2"
        >
          <div className="h-[416px] mt-16 pl-[42px] rounded-lg border-2 border-indigo-800 pt-[90px]">
            <div className="inline-flex items-start gap-7">
              <div className="flex items-center gap-2">
                <input type="radio" name="" id="" />
                <p>One way</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="" id="" />
                <p>Round-Trip</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="" id="" />
                <p>Direct Flight</p>
              </div>
            </div>

            {/*  */}
            <div className="mt-5 flex gap-2">
              <div className="w-[265px] pt-[2px] pr-[26px]">
                <p>Flying From</p>
                <div className="relative">
                  <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                    <img
                      src={FlightFrom}
                      alt="flightFromIcon"
                      className="w-5"
                    />
                  </span>
                  <input
                    type="text"
                    className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                    placeholder="Delhi and NCR, India"
                  />
                </div>
              </div>
              <div className="w-[265px] pt-[2px] pr-[26px]">
                <p>Flying To</p>
                <div className="relative">
                  <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                    <img src={flightTo} alt="flightFromIcon" className="w-5" />
                  </span>
                  <input
                    type="text"
                    className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                    placeholder="Delhi and NCR, India"
                  />
                </div>
              </div>
              <div className="w-[265px] pt-[2px] pr-[26px]">
                <p>Flying From</p>
                <div className="relative">
                  <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                    <img src={depature} alt="flightFromIcon" />
                  </span>
                  <input
                    type="text"
                    className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                    placeholder="Delhi and NCR, India"
                  />
                </div>
              </div>
              <div className="w-[265px] pt-[2px] pr-[26px]">
                <p>Flying From</p>
                <div className="relative">
                  <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                    <img src={returnCalender} alt="flightFromIcon" />
                  </span>
                  <input
                    type="text"
                    className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                    placeholder="Delhi and NCR, India"
                  />
                </div>
              </div>
            </div>

            {/*  */}
            <div>
              <div className="mt-5 flex gap-2">
                <div className="w-[265px] pt-[2px] pr-7">
                  <p>Traveler</p>
                  <DropDown />
                </div>
                <div className="w-[265px] pt-[2px] pr-7">
                  <p>Coach</p>
                  <DropDown />
                </div>
                <div className="flex items-end">
                  <input
                    className="w-[250px] h-[47px] old-logo-color text-white rounded-lg"
                    type="submit"
                    value="Search Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Search */}

        <div
          className={
            tab === 3
              ? "flex items-center justify-center gap-[37px] m-8 swing-in-top-fwd"
              : "hidden"
          }
          id="link3"
        >
          <div className="w-[250px] ">
            <h5>Destination</h5>
            <input
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                color: "blue",
                fontSize: "16px",
              }}
              className="mt-2 pl-10  border !border-[#808996a9] h-12 rounded"
              placeholder=" Delhi and NCR India"
            />
          </div>
          <div className="w-[250px]">
            <h5 className="font-semibold"> Travel Date</h5>
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

        {/* Transfer Search */}

        <div
          className={
            tab === 4
              ? "flex items-center justify-center gap-[37px] m-8 swing-in-top-fwd "
              : "hidden"
          }
          id="link4"
        >
          <div className="h-[484px] mt-16 pl-[42px] rounded-lg border-2 border-indigo-800 pt-[90px]">
            <div className="inline-flex items-start gap-7">
              <div className="flex items-center gap-2">
                <input type="radio" name="" id="" />
                <p>One way</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="" id="" />
                <p>Round-Trip</p>
              </div>
            </div>

            {/*  */}
            <div className="mt-5 flex gap-2">
              <div className="w-[265px] pt-[2px] pr-[26px]">
                <p>Destination</p>
                <div className="relative">
                  <DropDown />
                </div>
              </div>
              <div className="w-[265px] pt-[2px] pr-[26px]">
                <p>Pick Up</p>
                <div className="relative">
                  <DropDown />
                </div>
              </div>
              <div className="w-[265px] pt-[2px] pr-[26px]">
                <p>Airport</p>
                <div className="relative">
                  <DropDown />
                </div>
              </div>
              <div className="w-[265px] pt-[2px] pr-[26px]">
                <p>Drop Off</p>
                <div className="relative">
                  <DropDown />
                </div>
              </div>
            </div>

            {/*  */}
            <div>
              <div className="mt-5 flex items-center gap-2">
                <div className="w-[265px] pt-[2px] pr-7">
                  <p>Accomodation</p>
                  <DropDown />
                </div>
                <div className="w-[265px] pt-[2px] pr-7 ">
                  <p>Pick Up Date</p>
                  <div className="search-border">
                    <DatePicker
                      selected={startsDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className="w-[265px] pt-[2px] pr-7">
                  <p>Pick up Time</p>
                  <div className="search-border">
                    <DatePicker
                      selected={pickUpTime}
                      onChange={(date) => setPickUpTime(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </div>
                </div>
                <div className="w-[265px] pt-[2px] pr-7">
                  <p>Return Date</p>
                  <div className="search-border">
                    <DatePicker
                      selected={startsDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-5 flex items-center gap-2">
                <div className="w-[265px] pt-[2px] pr-7">
                  <p>Return Time</p>
                  <div className="search-border">
                    <DatePicker
                      selected={returnTime}
                      onChange={(date) => setReturnTime(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </div>
                </div>
                <div className="w-[265px] pt-[2px] pr-7">
                  <p>Passengers</p>
                  <DropDown />
                </div>
                <div className="flex items-end mt-7">
                  <input
                    className="w-[250px] h-[47px] old-logo-color text-white rounded-lg"
                    type="submit"
                    value="Search Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;

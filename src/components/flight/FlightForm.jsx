import { useDebounce } from "use-debounce";
import { useForm } from "react-hook-form";

import DropDown from "./DropDown";
import FlightFrom from "../../assets/image/flight/icons/FlightFrom.png";
// import depature from "../../assets/image/flight/icons/depature.png";
import flightTo from "../../assets/image/flight/icons/flightTo.png";
import "./FlightForm.css";

import Datepicker from "react-tailwindcss-datepicker";
import { useCallback, useState } from "react";
import { useGetLocationsQuery } from "../../redux/features/flight/flightApi";
import { skipToken } from "@reduxjs/toolkit/query";
import Select from "react-select";
// import returnCalender from "../../assets/image/flight/icons/returnCalender.png";
// import ReactDatePicker from "react-datepicker";
// import DatePicker from "react-datepicker";

const FlightForm = () => {
  const [flyingFrom, setFlyingFrom] = useState("Delhi and NCR, India");
  const [flyingTo, setFlyingTo] = useState("Delhi and NCR, India");
  const [locations, setLocations] = useState(null);
  const [destination, setDestination] = useState(null);
  const [searchTerm] = useDebounce(destination, 500);
  const { register, handleSubmit } = useForm();

  const { data, isLoading, isError } = useGetLocationsQuery(
    searchTerm || skipToken
  );

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [returnValue, setReturnValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const returnHandleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setReturnValue(newValue);
  };
  console.log(data);
  let countryOptions = [];
  if (data) {
    countryOptions = data.map((item) => {
      return {
        value: item.city_code,
        label: `${item.city_name}, ${item.countryName}`,
      };
    });
  }
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  console.log(data);
  console.log("serch term", searchTerm);
  return (
    <>
      <div className="flight-form h-[416px] mt-16 pl-[42px] rounded-lg border-2 border-indigo-800 pt-[90px]">
        <div className="inline-flex items-start gap-7 text-sm">
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
        <div className="mt-5 flex gap-8">
          <div className="w-[245px] pt-[2px]">
            <p className="font-semibold text-base text-[#0D233E]">
              Flying From
            </p>
            <div className="flex gap-2 items-center gray-border py-2.5 px-3">
              <img src={FlightFrom} alt="flightFromIcon" className="w-3.5 h-3.5" />
              <Select
                className="text-sm w-full"
                classNamePrefix="select"
                defaultValue={options[0]}
                // isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={true}
                isSearchable={true}
                name="color"
                options={countryOptions}
                onChange={(val) => console.log(val)}
                onInputChange={(e) => setDestination(e)}
              />
              {/* <input
                type="text"
                className="mt-2 pl-10 w-[243px] border border-[#80899633] h-12 rounded"
                // value={flyingFrom}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Delhi and NCR, India"
              /> */}
            </div>
          </div>
          <div className="w-[245px] pt-[2px]">
            <p>Flying To</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={flightTo} alt="flightFromIcon" className="w-5" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border border-[#80899633] h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="fs-base fw-medium">Departing</p>
            <div>
              <Datepicker
                popoverDirection="down"
                containerClassName=""
                inputClassName="border border-[#80899633] w-[245px] h-12 pl-4 rounded"
                asSingle={true}
                useRange={false}
                value={value}
                onChange={handleValueChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="fs-base fw-medium">Return</p>
            <div>
              <Datepicker
                popoverDirection="down"
                containerClassName=""
                inputClassName="border border-[#80899633] w-[245px] h-12 pl-4 rounded"
                asSingle={true}
                useRange={false}
                value={returnValue}
                onChange={returnHandleValueChange}
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
    </>
  );
};

export default FlightForm;

import DropDown from "./DropDown";
import FlightFrom from "../../assets/image/flight/icons/FlightFrom.png";
// import depature from "../../assets/image/flight/icons/depature.png";
import flightTo from "../../assets/image/flight/icons/flightTo.png";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
// import returnCalender from "../../assets/image/flight/icons/returnCalender.png";
// import ReactDatePicker from "react-datepicker";
// import DatePicker from "react-datepicker";
const FlightForm = () => {
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

  return (
    <>
      <div className="h-[416px] mt-16 pl-[42px] rounded-lg border-2 border-indigo-800 pt-[90px]">
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
            <p>Flying From</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={FlightFrom} alt="flightFromIcon" className="w-5" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border border-[#80899633] h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
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

import { useDebounce } from "use-debounce";
import { useForm } from "react-hook-form";

import DropDown from "./dropdown/DropDown";
import flightFromImg from "../../assets/image/flight/icons/FlightFrom.png";
// import depature from "../../assets/image/flight/icons/depature.png";
import flightToImg from "../../assets/image/flight/icons/flightTo.png";
import "./FlightForm.css";

import Datepicker from "react-tailwindcss-datepicker";
import { useCallback, useState } from "react";
import {
  useGetLocationsQuery,
  useGetSearchIdQuery,
} from "../../redux/features/flight/flightApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import Select from "react-select";
import LocationSearchBox from "./locationSearchBox/LocationSearchBox";
import FlightType from "./FlightType";
// import returnCalender from "../../assets/image/flight/icons/returnCalender.png";
// import ReactDatePicker from "react-datepicker";
// import DatePicker from "react-datepicker";

const FlightForm = () => {
  const travelerOptions = [
    { value: "1", label: "1 Adult" },
    { value: "1%1", label: "1 Adult 1 Child" },
    { value: "2%1", label: "2 Adult 1 Child" },
    { value: "2%1%1", label: "2 Adult 1 Child 1 Infant" },
    { value: "2%2%1", label: "2 Adult 2 Child" },
  ];

  const cabinOptions = [
    { value: "economy", label: "Economy" },
    { value: "premium-economy", label: "Premium Economy" },
    { value: "business", label: "Business" },
    { value: "first-class", label: "First Class" },
  ];

  const [flightFrom, setFlightFrom] = useState(null);
  const [flightTo, setFlightTo] = useState(null);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [traveler, setTraveler] = useState(null);
  const [cabinClass, setCabinClass] = useState("");
  const [flightType, setFlightType] = useState("");
  const [serachQueryParams, setSearchQueryParams] = useState(null);

  const { data, isLoading, isError } = useGetSearchIdQuery(
    serachQueryParams || skipToken
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const words = traveler?.split("%");
    console.log(words);
    const adults = parseInt(words[0]);
    const childs = words?.length >= 2 ? parseInt(words[1]) : 0;
    const infants = words?.length === 3 ? parseInt(words[2]) : 0;
    const queryData = {
      flightFrom,
      flightTo,
      departureDate: departureDate?.startDate,
      returnDate: returnDate?.startDate,
      adults,
      childs,
      infants,
      cabinClass,
      flightType,
    };
    console.log(queryData);
    setSearchQueryParams(queryData);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="flight-form h-[416px] mt-16 pl-[42px] rounded-lg border-2 grad-border-olc-8 pt-[90px]">
          <FlightType setFlightType={setFlightType} />

          {/* flying from .... */}
          <div className="mt-5 flex flex-wrap gap-8">
            <div className="w-[245px] flex flex-col gap-3">
              <p className="font-semibold text-base text-[#0D233E]">
                Flying From
              </p>
              <div className="flex h-12 gap-2 items-center gray-border py-2.5 px-3">
                <img
                  src={flightFromImg}
                  alt="flightFromIcon"
                  className="w-3.5 h-3.5"
                />
                <LocationSearchBox setOnChange={setFlightFrom} />
              </div>
            </div>
            <div className="w-[245px] flex flex-col gap-3">
              <p className="font-semibold text-base text-[#0D233E]">
                Flying To
              </p>
              <div className="flex h-12 gap-2 items-center gray-border py-2.5 px-3">
                <img
                  src={flightToImg}
                  alt="flightFromIcon"
                  className="w-3.5 h-3.5"
                />
                <LocationSearchBox setOnChange={setFlightTo} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-base text-[#0D233E]">
                Departing
              </p>
              <div className="w-[245px] h-12 flex gap-2 items-center gray-border py-2.5 px-3">
                <Datepicker
                  popoverDirection="down"
                  containerClassName="h-5"
                  inputClassName="p-0 text-sm text-[#0D233E]"
                  asSingle={true}
                  useRange={false}
                  value={departureDate}
                  onChange={(obj) => setDepartureDate(obj)}
                />
              </div>
            </div>
            {flightType === "round" ? (
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-base text-[#0D233E]">Return</p>
                <div className="w-[245px] h-12 flex gap-2 items-center gray-border py-2.5 px-3">
                  <Datepicker
                    popoverDirection="down"
                    containerClassName="h-5"
                    inputClassName="p-0 text-sm text-[#0D233E]"
                    asSingle={true}
                    useRange={false}
                    value={returnDate}
                    onChange={(obj) => setReturnDate(obj)}
                  />
                </div>
              </div>
            ) : null}

            <div className="w-[245px] flex flex-col gap-3">
              <p className="font-semibold text-base text-[#0D233E]">Traveler</p>
              <DropDown
                options={travelerOptions}
                placeholder="1 Adult"
                setOnChange={setTraveler}
              />
            </div>
            <div className="w-[245px] flex flex-col gap-3">
              <p className="font-semibold text-base text-[#0D233E]">Coach</p>
              <DropDown
                options={cabinOptions}
                placeholder="Economy"
                setOnChange={setCabinClass}
              />
            </div>
            <div className="flex items-end">
              <input
                className="w-[250px] py-3 old-logo-color text-white rounded font-medium text-base"
                type="submit"
                value="Search Now"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FlightForm;

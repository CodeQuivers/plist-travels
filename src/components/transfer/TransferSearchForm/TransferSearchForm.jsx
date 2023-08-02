import DatePicker from "react-datepicker";
import { useState } from "react";
import DropDown from "../TransferDropDown/TransferDropDown";
import Datepicker from "react-tailwindcss-datepicker";
import "./TransferSearchForm.css";
const TransferSearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [pickUpTime, setPickUpTime] = useState(new Date());
  console.log("pickUpTime", pickUpTime);
  const [returnTime, setReturnTime] = useState(new Date());
  console.log("returnTime", returnTime);

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
        <div className="mt-5 flex gap-[30px]">
          <div className="w-[245px]">
            <p>Accomodation</p>
            <DropDown />
          </div>
          <div className="flex flex-col gap-2">
            <p>Pick Up Date</p>
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
          <div className="flex flex-col gap-2">
            <p>Pick up Time</p>
            <div className="border border-[#80899633]">
              <DatePicker
                className="time-picker"
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
          <div className="flex flex-col gap-2">
            <p>Return Date</p>
            <Datepicker
              popoverDirection="down"
              containerClassName=""
              inputClassName="border border-[#80899633] w-[241px] h-12 pl-4 rounded"
              asSingle={true}
              useRange={false}
              value={returnValue}
              onChange={returnHandleValueChange}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-5 flex gap-[30px]">
          <div className="flex flex-col gap-2">
            <p>Return Time</p>
            <div className="border border-[#80899633]">
              <DatePicker
                className="time-picker"
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
          <div className="w-[265px] pt-[2px]">
            <p>Passengers</p>
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
  );
};

export default TransferSearchForm;

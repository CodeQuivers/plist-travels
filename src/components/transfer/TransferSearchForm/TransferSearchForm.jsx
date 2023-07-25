import DatePicker from "react-datepicker";
import { useState } from "react";
import DropDown from "../TransferDropDown/TransferDropDown";

const TransferSearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [pickUpTime, setPickUpTime] = useState(new Date());
  console.log("pickUpTime", pickUpTime);
  const [returnTime, setReturnTime] = useState(new Date());
  console.log("returnTime", returnTime);

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
        <div className="mt-5 flex gap-2">
          <div className="w-[265px] pt-[2px] pr-7">
            <p>Accomodation</p>
            <DropDown />
          </div>
          <div className="w-[265px] pt-[2px] pr-7">
            <p>Pick Up Date</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="w-[265px] pt-[2px] pr-7">
            <p>Pick up Time</p>
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
          <div className="w-[265px] pt-[2px] pr-7">
            <p>Return Date</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-5 flex gap-2">
          <div className="w-[265px] pt-[2px] pr-7">
            <p>Return Time</p>
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
          <div className="w-[265px] pt-[2px] pr-7">
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

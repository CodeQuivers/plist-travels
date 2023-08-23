import { useState } from "react";
import Select from "react-dropdown-select";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LocationSearchBox from "../LocationSearchBox";
import { useForm, Controller } from "react-hook-form";

// import calenderBlackIcon from "../.../../assets/image/tours/icons/calender-black.svg";
import cal from "../../../assets/image/tours/icons/calender-black.svg";
import GuestDropdown from "../../shared/guestDropdown/GuestDropdown";

const HotelSearch = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const { register, handleSubmit, watch, formState, control, setValue } = useForm();
  const { errors } = formState || {};

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
  const onSubmit = (data) => console.log(data);
  // const dateRana = register("dateRana");
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full gap-7 lg:flex max-md:space-y-5 justify-around items-end border-[#1066B5] shadow-2xl shadow-[#1065b517] mt-14 border md:p-12 p-7 rounded-2xl ">
          <div className="w-[250px]">
            <LocationSearchBox
              register={register}
              Controller={Controller}
              control={control}
              errors={errors}
            />
          </div>

          <div className="w-[263px] flex flex-col gap-1.5">
            <lable className="text-base font-semibold text-[#0D233E]">
              Check In - Check Out
            </lable>
            <div className="flex items-center gap-1.5 gray-border px-3 py-3 text-sm">
              <img src={cal} className="w-[20px] h-[14px]" alt="" />
              <Controller
                name="stayTime"
                // {...register("dateRana")}
                control={control}
                render={({ onChange, formState }) => (
                  <ReactDatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                      setValue('stayTime', update)
                      
                    }}
                    // isClearable={true}
                    placeholderText="2023/06/27 - 2023/06/29"
                    todayButton="TODAY"
                    monthsShown={2}
                  />
                )}
              />
            </div>
          </div>
          {/* <div className="w-full">
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
          </div> */}
          <div className="w-[250px] flex flex-col gap-1.5">
            <lable className="text-base font-semibold text-[#0D233E]">
            Guests
            </lable>
            <div className="flex items-center gap-1.5 gray-border px-3 py-3 text-sm">
              <input disabled type="text" placeholder="1 Room - 2 Guests"/>
              {/* <GuestDropdown/> */}
            </div>
          </div>
          <div className="w-[250px]">
            <button
              className="w-full defaultColor py-3.5 text-white text-sm font-medium rounded "
              type="submit"
            >
              Search Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelSearch;

import { useState } from "react";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LocationSearchBox from "../LocationSearchBox";
import { useForm, Controller } from "react-hook-form";

// import calenderBlackIcon from "../.../../assets/image/tours/icons/calender-black.svg";
import cal from "../../../assets/image/tours/icons/calender-black.svg";
import GuestDropdown from "../../shared/guestDropdown/GuestDropdown";
import ErrorAlert from "../../shared/alert/ErrorAlert";

const HotelSearch = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState,
    control,
    setValue,
    getFieldState,
    getValues,
  } = useForm({
    defaultValues: {
      rooms: 1,
      guest: [{ adult: 1, child: 0 }],
      totalGuest: 1,
    },
  });
  const { errors } = formState || {};

  const onSubmit = (data) => console.log(data);
  // const dateRana = register("dateRana");
  console.log(errors);
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
                control={control}
                render={({ onChange, formState }) => (
                  <ReactDatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                      setValue("stayTime", update);
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

          <div className="w-[250px] flex flex-col gap-1.5">
            <lable className="text-base font-semibold text-[#0D233E]">
              Guests
            </lable>
            <div className="gap-1.5 gray-border px-3 py-3 text-sm">
              <button onClick={() => setShowGuestDropdown(!showGuestDropdown)}>
                {getValues("rooms")} Room(s) - {getValues("totalGuest")}{" "}
                Guest(s)
              </button>
              {showGuestDropdown && (
                <GuestDropdown
                  getFieldState={getFieldState}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  control={control}
                />
              )}
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
        {errors.location && <ErrorAlert message={errors.location.message} />}
      </form>
    </div>
  );
};

export default HotelSearch;

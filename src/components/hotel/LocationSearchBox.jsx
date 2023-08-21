import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import Select from "react-select";

import bedBlackIcon from "../../assets/image/tours/icons/bed-black.svg";
import { useGetHotelLocationsQuery } from "../../redux/features/hotel/hotelApi";

const designOptions = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    boxShadow: "none",
    minHeight: "auto",
  }),
  valueContainer: (baseStyles, state) => ({
    ...baseStyles,
    margin: "0",
    padding: "0",
  }),
  input: (baseStyles, state) => ({
    ...baseStyles,
    margin: "0",
    padding: "0",
  }),
  indicatorsContainer: (baseStyles, state) => ({
    ...baseStyles,
    display: "none",
  }),
};
const LocationSearchBox = ({
  travelerInfo,
  register,
  Controller,
  control,
  errors,
}) => {
  const [locationToSearch, setLocationToSearch] = useState(null);
  const [searchTerm] = useDebounce(locationToSearch, 500);
  const { data, isLoading, isError } = useGetHotelLocationsQuery(
    searchTerm || skipToken
  );
  let countryOptions = [];
  if (!isError && data?.length > 0) {
    countryOptions = data.map((item) => {
      return {
        value: item.city_code,
        label: `${item.city_name}, ${item.countryName}`,
      };
    });
  }

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label className="text-base font-semibold text-[#0D233E]">
        Destination
      </label>
      <div className="w-full flex items-center gap-1.5 gray-border px-3 py-3">
        <img src={bedBlackIcon} className="w-[20px] h-[14px]" alt="" />
        <Controller
          name="location"
          control={control}
          rules={{ required: "Locations is required!" }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            // fieldState: { invalid, isTouched, isDirty, error },
            // formState,
          }) => (
            <Select
              className="ltext-sm w-full"
              classNamePrefix="select"
              defaultValue={{ label: "Delhi and NCR, India", value: "DEL" }}
              // isDisabled={isDisabled}
              styles={designOptions}
              isLoading={isLoading}
              isClearable={true}
              isSearchable={true}
              name="location"
              options={countryOptions}
              onChange={(val) => onChange(val)}
              onInputChange={(e) => setLocationToSearch(e)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default LocationSearchBox;

import React, { useState } from "react";
import Select from "react-select";

import "./location-search-box.css";
import { useDebounce } from "use-debounce";
import { useGetLocationsQuery } from "../../../redux/features/flight/flightApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const LocationSearchBox = ({setOnChange}) => {
    const [location, setLocation] = useState(null);
    const [searchTerm] = useDebounce(location, 500);

    
  const { data, isLoading, isError } = useGetLocationsQuery(
    searchTerm || skipToken
  );
  let countryOptions = [];
  if (data) {
    countryOptions = data.map((item) => {
      return {
        value: item.city_code,
        label: `${item.city_name}, ${item.countryName}`,
      };
    });
  }

  return (
    <Select
      className="location-search-box text-sm w-full"
      classNamePrefix="select"
      defaultValue={{label:'Delhi and NCR, India', value:'DEL'}}
      // isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={true}
      isSearchable={true}
      name="color"
      options={countryOptions}
      onChange={(val) => setOnChange(val)}
      onInputChange={(e) => setLocation(e)}
    />
  );
};

export default LocationSearchBox;

import React from "react";

import FilterSearch from "./FilterSearch";
import TourSearchResultList from "./TourSearchResultList";
import PagingBar from "./PagingBar";


const TourSearchResult = () => {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="md:w-[1170px] mx-auto flex gap-8">
        <FilterSearch />
        <TourSearchResultList />
      </div>
      <PagingBar/>
    </div>
  );
};

export default TourSearchResult;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageNumberAction } from "../../../redux/features/pagination/paginationSlice";
import { useGetFlightListQuery } from "../../../redux/features/flight/flightApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const PaginationButton = ({ pageNumber, searchId }) => {
  const { currentPageNumber, numOfPage } = useSelector(
    (state) => state.pagination
  );
  const [queryParams, setQueryParams] = useState({});
  const { data, isError } = useGetFlightListQuery(queryParams || skipToken);

  const dispatch = useDispatch();
  const borderClass = pageNumber + 1 === numOfPage ? "" : "border-r";
  const textColor =
    currentPageNumber === pageNumber ? "text-black font-medium" : "text7F8FA4";
  const handleOnClick = () => {
    dispatch(setCurrentPageNumberAction(pageNumber));
    setQueryParams({
      searchId,
      sortVal: "price_ASC",
      page: pageNumber + 1,
    });
  };
  if(!isError && data?.result?.length>=0){
    setQueryParams({})
  }
  return (
    <button
      onClick={handleOnClick}
      className={`text-sm px-3 ${borderClass} ${textColor}`}
    >
      {pageNumber + 1}
    </button>
  );
};

export default PaginationButton;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageNumberAction } from "../../../redux/features/pagination/paginationSlice";

const PaginationButton = ({ pageNumber }) => {
  const { currentPageNumber, numOfPage } = useSelector(
    (state) => state.pagination
  );
  const dispatch = useDispatch();
  const borderClass = pageNumber + 1 === numOfPage ? "" : "border-r";
  const textColor =
    currentPageNumber === pageNumber ? "text-black font-medium" : "text7F8FA4";
  const handleOnClick = () => {
    dispatch(setCurrentPageNumberAction(pageNumber));
  };
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

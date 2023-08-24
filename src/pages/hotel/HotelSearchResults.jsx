// import HotelSearch from "../../components/hotel/hotelSearch/HotelSearch";
import { useSelector } from "react-redux";
import HotelSearchForm from "../../components/hotel/hotelSearch/HotelSearchForm";
import HotelSearchFilters from "./HotelSearchFilters";
import SearchResults from "./SearchResults";
import { useGetSearchedHotelListQuery } from "../../redux/features/hotel/hotelApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const HotelSearchResults = () => {
  const searchParams = useSelector(state=>state.hotelSearch);
  const {data, isLoading, isError} = useGetSearchedHotelListQuery(searchParams || skipToken);
  console.log(data)
  return (
    <section className="mt-20 py-20 border-t grid grid-cols-9 gap-5">
      <div className="col-span-2">
        <HotelSearchFilters />
      </div>
      <div className="col-span-7">
        <SearchResults />
      </div>
    </section>
  );
};

export default HotelSearchResults;

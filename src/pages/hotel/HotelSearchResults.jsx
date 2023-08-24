// import HotelSearch from "../../components/hotel/hotelSearch/HotelSearch";
import HotelSearchForm from "../../components/hotel/hotelSearch/HotelSearchForm";
import HotelSearchFilters from "./HotelSearchFilters";
import SearchResults from "./SearchResults";

const HotelSearchResults = () => {
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

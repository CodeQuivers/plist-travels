import HotelSearchFilters from "./HotelSearchFilters";
import SearchResults from "./SearchResults";

const HotelSearchResults = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      {/* <HotelSearch /> */}
      {/* search result section */}
      <section className="mt-20 py-20 border-t grid md:grid-cols-9 gap-5">
        <div className="col-span-2">
          <HotelSearchFilters />
        </div>
        <div className="col-span-7">
          <SearchResults />
        </div>
      </section>
    </div>
  );
};

export default HotelSearchResults;

import { IoSearchOutline } from "react-icons/io5";
import FilterByRatings from "../../components/hotel/filters/FilterByRatings";
import FilterByPriceRating from "../../components/hotel/filters/FilterByPriceRating";
import FilterByBoard from "../../components/hotel/filters/FilterByBoard";
import FilterByProduct from "../../components/hotel/filters/FilterByProduct";
import FilterByFacilities from "../../components/hotel/filters/FilterByFacilities";

const HotelSearchFilters = () => {
  return (
    <div className="w-full searchResultsFont border-gradientFilterBox  px-0.5">
      <div className="border-b px-4 py-5">
        <h4 className="font-medium">Filters</h4>
      </div>
      <div className="px-4 py-5">
        {/* search by text */}
        <div className="flex items-center justify-between border rounded-md">
          <input
            type="text"
            className="w-full border-r placeholder:text-black placeholder:text-sm focus:outline-none rounded-l-md pl-2 py-1"
            placeholder="Search By Hotel"
          />
          <button type="button" className="px-2 ">
            <span>
              <IoSearchOutline />
            </span>
          </button>
        </div>

        {/* search by rating */}
        <div className="mt-5 border-b pb-5">
          <FilterByRatings />
        </div>
        {/* filter by price range */}
        <div className="mt-5 border-b pb-5">
          <FilterByPriceRating />
        </div>
        {/* filter by Board */}
        <div className="mt-5 border-b pb-5">
          <FilterByBoard />
        </div>
        {/* filter by product */}
        <div className="mt-5 border-b pb-5">
          <FilterByProduct />
        </div>
        {/* filter by facilities */}
        <div className="mt-5 border-b pb-5">
          <FilterByFacilities />
        </div>
        {/* apply Filters */}
        <div className="mt-5 ">
          <button
            className="text-sm  w-full text-white py-2 rounded-md bg-gradient-to-r from-[#0E57B2] to-[#1599C1]"
            type="button"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchFilters;

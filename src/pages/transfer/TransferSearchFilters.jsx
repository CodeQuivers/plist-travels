import TransferFilterByPriceRange from "../../components/transfer/TransferFilters/TransferFilterByPriceRange";
import TransferFiltersByVechicleType from "../../components/transfer/TransferFilters/TransferFiltersByVechicleType";
import TransferFilterByCarBodyType from "../../components/transfer/TransferFilters/TransferFilterByCarBodyType";
import TransferFilterByCarSeats from "../../components/transfer/TransferFilters/TransferFilterByCarSeats";
const TransferSearchFilters = () => {
    return (
        <div className="w-full searchResultsFont border-gradientFilterBox  px-0.5">
            <div className="border-b px-4 py-5">
                <h4 className="font-medium">Filters</h4>
            </div>
            <div className="px-4">
                {/* search by price range */}
                <div className="mt-5 border-b pb-5">
                    <TransferFilterByPriceRange />
                </div>
                {/* filter by vechicle type */}
                <div className="mt-5 border-b pb-5">
                    <TransferFiltersByVechicleType />
                </div>
                {/* filter by car body type */}
                <div className="mt-5 border-b pb-5">
                    <TransferFilterByCarBodyType />
                </div>
                {/* filter by product */}
                <div className="mt-5 border-b pb-5">
                    <TransferFilterByCarSeats />
                </div>
                <div className="space-y-3 mt-5 border-b pb-5">
                    <button className="bg-gradient-to-r from-[#0F5BB3] to-[#159AC2] text-white hover:bg-gradient-to-r hover:from-[#0F5BB3] hover:to-[#148aad] duration-300 ease-in-out transition-all py-2 text-sm font-medium w-full rounded-md">
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransferSearchFilters;
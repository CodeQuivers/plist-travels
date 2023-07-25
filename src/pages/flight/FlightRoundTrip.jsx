import Select from "react-dropdown-select";
import sortByIcon from "../../assets/image/hotel/sortByIcon.svg";
import FlightForm from "../../components/flight/FlightForm";
import Divider from "../../components/tours/Divider";
import ChainaSouthern from "../../assets/image/flight/images/ChainaSouthern.png";
import moveRight from "../../assets/image/flight/icons/move-right.svg";
import Pagination from "../../components/flight/Pagination";
import MultiRangeSlider from "../../components/flight/rangeSlider/MultiRangeSlider";
import FilterRadioButton from "../../components/tours/tourSearchResult/FilterRadioButton";
const FlightRoundTrip = () => {
  const options = [
    {
      value: 1,
      label: "Sort By Hotel",
    },
    {
      value: 2,
      label: "Price: Low to High",
    },
    {
      value: 3,
      label: "Price: High to Low",
    },
    {
      value: 4,
      label: "Price: Low to High",
    },
    {
      value: 5,
      label: "Price: High to Low",
    },
  ];
  const customStyles = {
    border: "none",
    outline: "none",
    fontSize: "14px",
  };
  return (
    <>
      <div className="w-[1170px] mx-auto">
        <FlightForm />
      </div>
      <Divider />
      <div className="w-[1170px] mx-auto">
        <div className="flex gap-10">
          {/* filters */}
          <div className="w-[255px] h-[545px] old-logo-color-border">
            <div className="h-[66px] p-5 border-b-2 border-gray-300">
              <p>Filters</p>
            </div>
            <div className="mx-5">
              <p className="my-4">Flight By Price</p>
              <MultiRangeSlider
                min={0}
                max={1000}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
              />
              <hr className="mt-4 mb-5" />
            </div>
            <div className="mx-5">
              <p className="mb-2">Flight Stops</p>
              <FilterRadioButton text={"0 Stops"} />
              <FilterRadioButton text={"1 Stops"} />
              <hr className="my-5" />
            </div>
            <div className="mx-5">
              <p className="mb-2">Flight Stops</p>
              <FilterRadioButton text={"Air India Limited (575)"} />
              <FilterRadioButton text={"Air Vista (584)"} />
              <FilterRadioButton text={"ZZZ (566)"} />
              <hr className="my-5" />
              <button className="w-[215px] h-9 old-logo-color rounded-md text-white">
                Apply Filters
              </button>
            </div>
          </div>

          <div className=" w-[875px] ">
            <div className="border-b border-t border-x border-x-indigo-700 border-t-indigo-700 py-4">
              <div className="flex px-4 justify-between items-center">
                <div>
                  <h4 className="searchResultsFont">
                    Search Results
                    <span className="text-[#66768E] text-sm"> (126)</span>
                  </h4>
                </div>
                <div className="flex  border border-[#E6E8EC] px-2 divide-x-2  rounded-t-md">
                  <Select
                    options={options}
                    values={[
                      {
                        value: 1,
                        label: "Sort By Hotel",
                      },
                    ]}
                    style={customStyles}
                    dropdownHandle={false}
                    searchable={false}
                    className="!w-[140px] py-1"
                    onChange={(value) => console.log(value)}
                  />
                  <img className="pl-2 pr-1 py-1" src={sortByIcon} alt="" />
                </div>
              </div>
            </div>
            {/* Round tip 1 */}
            <div className="mb-8 pl-5 py-5 old-logo-color-border">
              {/* item one */}
              <div className="pl-5 py-5 flex justify-between">
                <div className="flex gap-[84px]">
                  <div>
                    <img src={ChainaSouthern} alt="ChainaSouthern" />
                    <p>China Southern</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                  <div>
                    <span className="text-xs">21 hours 45 minutes</span>
                    <img src={moveRight} alt="" />
                    <span className="text-xs">1 Stop via Guangzhou</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                </div>
                <div className="pr-5">
                  <span className="text-sm">Price</span>
                  <p className="text-base">USD 17,985</p>
                </div>
              </div>
              <hr className="w-[480px] mx-auto my-5" />
              {/* item two */}
              <div className="pl-5 py-5 flex justify-between">
                <div className="flex gap-[84px]">
                  <div>
                    <img src={ChainaSouthern} alt="ChainaSouthern" />
                    <p>China Southern</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                  <div>
                    <span className="text-xs">21 hours 45 minutes</span>
                    <img src={moveRight} alt="" />
                    <span className="text-xs">1 Stop via Guangzhou</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                </div>
                <div className="pr-5">
                  <button className="text-white py-4 px-3 rounded old-logo-color">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Round tip 2 */}
            <div className="mb-8 pl-5 py-5 old-logo-color-border">
              {/* item one */}
              <div className="pl-5 py-5 flex justify-between">
                <div className="flex gap-[84px]">
                  <div>
                    <img src={ChainaSouthern} alt="ChainaSouthern" />
                    <p>China Southern</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                  <div>
                    <span className="text-xs">21 hours 45 minutes</span>
                    <img src={moveRight} alt="" />
                    <span className="text-xs">1 Stop via Guangzhou</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                </div>
                <div className="pr-5">
                  <span className="text-sm">Price</span>
                  <p className="text-base">USD 17,985</p>
                </div>
              </div>
              <hr className="w-[480px] mx-auto my-5" />
              {/* item two */}
              <div className="pl-5 py-5 flex justify-between">
                <div className="flex gap-[84px]">
                  <div>
                    <img src={ChainaSouthern} alt="ChainaSouthern" />
                    <p>China Southern</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                  <div>
                    <span className="text-xs">21 hours 45 minutes</span>
                    <img src={moveRight} alt="" />
                    <span className="text-xs">1 Stop via Guangzhou</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                </div>
                <div className="pr-5">
                  <button className="text-white py-4 px-3 rounded old-logo-color">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Round tip 3 */}
            <div className=" mb-8 pl-5 py-5 old-logo-color-border">
              {/* item one */}
              <div className="pl-5 py-5 flex justify-between">
                <div className="flex gap-[84px]">
                  <div>
                    <img src={ChainaSouthern} alt="ChainaSouthern" />
                    <p>China Southern</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                  <div>
                    <span className="text-xs">21 hours 45 minutes</span>
                    <img src={moveRight} alt="" />
                    <span className="text-xs">1 Stop via Guangzhou</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                </div>
                <div className="pr-5">
                  <span className="text-sm">Price</span>
                  <p className="text-base">USD 17,985</p>
                </div>
              </div>
              <hr className="w-[480px] mx-auto my-5" />
              {/* item two */}
              <div className="pl-5 py-5 flex justify-between">
                <div className="flex gap-[84px]">
                  <div>
                    <img src={ChainaSouthern} alt="ChainaSouthern" />
                    <p>China Southern</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                  <div>
                    <span className="text-xs">21 hours 45 minutes</span>
                    <img src={moveRight} alt="" />
                    <span className="text-xs">1 Stop via Guangzhou</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">Depart</span>
                    <span className="text-sm">00:50</span>
                    <span className="text-xs">Thu, 3 Aug 2023</span>
                    <span className="text-sm">Dhaka</span>
                  </div>
                </div>
                <div className="pr-5">
                  <button className="text-white py-4 px-3 rounded old-logo-color">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className="pt-10">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default FlightRoundTrip;

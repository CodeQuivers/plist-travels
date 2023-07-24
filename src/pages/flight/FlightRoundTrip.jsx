import Select from "react-dropdown-select";
import sortByIcon from "../../assets/image/hotel/sortByIcon.svg";
import FlightForm from "../../components/flight/FlightForm";
import Divider from "../../components/tours/Divider";

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
          <div className="w-[255px] old-logo-color-border">
            <div className="h-[66px] p-5 border-b-2 border-gray-300">
              <p>Filters</p>
            </div>
          </div>
          <div className=" w-[875px] old-logo-color-border">
            <div className="border-b py-4">
              <div className="flex px-4 justify-between items-center">
                <div>
                  <h4 className="searchResultsFont">
                    Search Results{" "}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightRoundTrip;

import Select from "react-dropdown-select";
// import sortByIcon from "../../assets/image/hotel/sortByIcon.svg";
import searchIcon from "../../../src/assets/image/tours/icons/searchIcon.svg";
// import DoubleArrowIcon from "../../../src/assets/image/tours/icons/DoubleArrow.svg";

const SearchSort = () => {
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
        padding: "0 13px"
    };
    return (
        <div className="flex justify-between items-center">
            <div className="flex gray-border items-center">
                <div className="flex justify-center">
                    <img src={searchIcon} className="w-4 h-4 ml-4" alt="" />
                </div>
                <input
                    className="border-r p-2 outline-none w-[308px]"
                    type="text"
                    placeholder="Search"
                />
            </div>
            <div className="flex items-center border rounded">
                <Select
                    options={options}
                    values={[
                        {
                            value: 1,
                            label: "Newest first",
                        },
                    ]}
                    style={customStyles}
                    searchable={false}
                    className="!w-[308px] py-1"
                    onChange={(value) => console.log(value)}
                />
            </div>
        </div>
    );
};

export default SearchSort;
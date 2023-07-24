import Select from "react-dropdown-select";
import sortByIcon from "../../assets/image/hotel/sortByIcon.svg";
import resultImg from "../../assets/image/hotel/resultImg.png";
import { AiFillStar } from "react-icons/ai";
import { TbDiscountCheckFilled } from "react-icons/tb";

const TransferResult = () => {
    const results = [
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
        {
            category: "HOTEL",
            title: "Oyo 12123 Hotel Sweet Dreams",
            description: `1 National Highway 24 Lal Kuan Near Radha Krishna, GHAZIABAD`,
            image: resultImg,
            features: ["WIFI", "Gym", "Hotel Safe", "Day Care", "Medical Service"],
            status: "Not Available",
            price: 254,
            reviews: {
                total: 23,
                rating: 5,
            },
        },
    ];
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
        <div className="w-full border-gradientBox rounded-xl ">
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

            {/* search results */}
            <section className="px-4 searchResultsFont  divide-y">
                {results?.map((result) => (
                    <div
                        className="divide-x py-5 grid grid-cols-8 gap-5"
                        key={Math.random()}
                    >
                        <div className="col-span-6 flex gap-4 w-full">
                            <div>
                                <img
                                    className="w-[225px] h-[138px]"
                                    src={result.image}
                                    alt=""
                                />
                            </div>
                            <div>
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-xs">{result?.category}</h4>
                                    <h4 className="font-semibold text-sm gradientText">
                                        {result?.title}
                                    </h4>
                                </div>
                                <div className="space-y-1 mt-2.5">
                                    <p className="text-xs">{result?.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {result?.features?.map((feature) => (
                                            <p
                                                className="text-xs bg-gradient-to-r from-[#0F5BB3] to-[#159AC2] text-white hover:bg-gradient-to-r hover:from-[#0F5BB3] hover:to-[#148aad] duration-300 ease-in-out transition-all px-2 py-0.5 rounded"
                                                key={Math.random()}
                                            >
                                                {feature}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-sm text-[#66768E]">Status: </p>
                                            <h4>{result?.status}</h4>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#66768E]">Price</p>
                                            <h4>${result?.price}</h4>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#66768E]">Destination</p>
                                            <button
                                                type="button"
                                                className=" border-gradientBtn2  px-3 font-medium "
                                            >
                                                Show Map
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-4 w-full col-span-2">
                            <div className="space-y-3">
                                <p className="flex justify-center items-center">
                                    <span className="text-sm pr-1">Price</span> <span className="pr-1">$250</span> <span className="text-[10px]"><sub>Par/Day</sub></span>
                                </p>
                                <button className="bg-gradient-to-r from-[#0F5BB3] to-[#159AC2] text-white hover:bg-gradient-to-r hover:from-[#0F5BB3] hover:to-[#148aad] duration-300 ease-in-out transition-all py-2 text-sm font-medium w-full rounded-md">
                                    Book Now
                                </button>

                                <button className="border-gradientBtn text-white font-medium">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default TransferResult;
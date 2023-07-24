import Divider from "../../components/tours/Divider";
import landscapeImage from "../../assets/image/hotel/landscape.png";
import landscape from "../../assets/image/flight/images/landscape 09.png";
import location from "../../assets/image/flight/icons/location.svg";
import countryFlight from "../../assets/image/flight/images/country-flight.jpeg";
import worldFlight from "../../assets/image/flight/images/worldFlight.png";
import "./flight.css";
// import suport from "../../assets/image/flight/icons/Suport.svg";
// import vast from "../../assets/image/flight/icons/Vast.svg";
// import partner from "../../assets/image/flight/icons/Partner.svg";
import { FaRegHeart } from "react-icons/fa";
// import { GiRoundStar } from "react-icons/gi";
import Pagination from "../../components/flight/Pagination";
import FlightForm from "../../components/flight/FlightForm";
import Card1 from "../../components/flight/Card1";
import HotelBanner from "../../components/hotel/hotelBanner/HotelBanner";
import SearchAccordion from "../../components/hotel/searchAccordion/SearchAccordion";
import HotelFaq from "../../components/hotel/HotelFaq";
const Flight = () => {
  return (
    <>
      <div className="w-[1170px] mx-auto">
        {/* flight form strat */}
        <FlightForm />
        {/* flight form end */}
        <Divider />
        {/* card 1 strat*/}
        <Card1 />
        {/* card 1 end*/}

        {/* banner */}
        <HotelBanner />
        {/*  */}

        <div className="mt-20 max-md:px-5 ">
          {/* section title */}
          <div className="my-10">
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
              Explore The World For Nigeria
            </h1>
          </div>

          {/* section cards */}

          <div className="mb-16 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-around">
            <div className="col-span-2 group duration-300 ease-linear  transition-all rounded-3xl h-[380px]">
              <div className="hotelCardBg h-full group-hover:bg-white">
                <div className="relative h-[240px]">
                  <img className="h-full w-full" src={landscape} alt="" />
                  <div>
                    <button
                      type="button"
                      className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                    >
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex my-5 justify-between items-center px-5">
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      Sweet Dreams
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      Karineside
                    </p>
                  </div>
                  <div>
                    <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                      $548
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className="hotelCardBg h-full group-hover:bg-white ">
                <div className="relative">
                  <img className="w-full" src={landscapeImage} alt="" />

                  <div>
                    <button
                      type="button"
                      className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                    >
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex my-5 justify-between items-center px-5">
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      Sweet Dreams
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      Karineside
                    </p>
                  </div>
                  <div>
                    <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                      $548
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className="hotelCardBg h-full group-hover:bg-white ">
                <div className="relative">
                  <img className="w-full" src={landscapeImage} alt="" />

                  <div>
                    <button
                      type="button"
                      className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                    >
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex my-5 justify-between items-center px-5">
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      Sweet Dreams
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      Karineside
                    </p>
                  </div>
                  <div>
                    <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                      $548
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hop On, Hop Off */}
        <div className="mt-20 max-md:px-5">
          {/* section title */}
          <div className="my-10">
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
              Says Near Logos
            </h1>
          </div>

          {/* section cards */}

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-around">
            {/* single card start */}
            <div className="old-logo-color group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className=" ">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    className="w-full h-[293px]"
                    src={countryFlight}
                    alt=""
                  />
                </div>
                <div className="flex my-5 px-5 gap-2">
                  <img className="mb-4" src={location} alt="location" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      USA
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      $ 2546
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="old-logo-color group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className=" ">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    className="w-full h-[293px]"
                    src={countryFlight}
                    alt=""
                  />
                </div>
                <div className="flex my-5 px-5 gap-2">
                  <img className="mb-4" src={location} alt="location" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      USA
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      $ 2546
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="old-logo-color group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className=" ">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    className="w-full h-[293px]"
                    src={countryFlight}
                    alt=""
                  />
                </div>
                <div className="flex my-5 px-5 gap-2">
                  <img className="mb-4" src={location} alt="location" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      USA
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      $ 2546
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="old-logo-color group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className=" ">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    className="w-full h-[293px]"
                    src={countryFlight}
                    alt=""
                  />
                </div>
                <div className="flex my-5 px-5 gap-2">
                  <img className="mb-4" src={location} alt="location" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      USA
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      $ 2546
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="old-logo-color group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className=" ">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    className="w-full h-[293px]"
                    src={countryFlight}
                    alt=""
                  />
                </div>
                <div className="flex my-5 px-5 gap-2">
                  <img className="mb-4" src={location} alt="location" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      USA
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      $ 2546
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="old-logo-color group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className=" ">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    className="w-full h-[293px]"
                    src={countryFlight}
                    alt=""
                  />
                </div>
                <div className="flex my-5 px-5 gap-2">
                  <img className="mb-4" src={location} alt="location" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      USA
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      $ 2546
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="old-logo-color group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className=" ">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    className="w-full h-[293px]"
                    src={countryFlight}
                    alt=""
                  />
                </div>
                <div className="flex my-5 px-5 gap-2">
                  <img className="mb-4" src={location} alt="location" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      USA
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      $ 2546
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="old-logo-color group duration-300 ease-linear  transition-all w-full rounded-3xl h-[380px]">
              <div className=" ">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <img
                    className="w-full h-[293px]"
                    src={countryFlight}
                    alt=""
                  />
                </div>
                <div className="flex my-5 px-5 gap-2">
                  <img className="mb-4" src={location} alt="location" />
                  <div>
                    <h4 className="text-white font-medium group-hover:text-black">
                      USA
                    </h4>
                    <p className="text-xs group-hover:text-black font-medium text-white">
                      $ 2546
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* single card end */}
          </div>
          {/* Pagination */}
          <Pagination />

          {/*  */}
          <div>
            {/* section title */}
            <div className="my-10">
              <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
                Your Wishlist Starts Here
              </h1>
            </div>
            {/* section cards */}

            {/* card strats */}
            <div className="grid grid-cols-2 gap-8 justify-around">
              <div className="w-[570px] h-[336px]">
                <div className="h-[240px] relative">
                  <img className="h-full w-full" src={worldFlight} alt="" />
                  <div>
                    <button
                      type="button"
                      className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                    >
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                </div>
                <div className="old-logo-color p-5 text-white rounded-b-3xl">
                  <h1>Sweet Dreams</h1>
                  <p>Karineside</p>
                </div>
              </div>
              <div className="w-[570px] h-[336px]">
                <div className="h-[240px] relative">
                  <img className="h-full w-full" src={worldFlight} alt="" />
                  <div>
                    <button
                      type="button"
                      className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                    >
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                </div>
                <div className="old-logo-color p-5 text-white rounded-b-3xl">
                  <h1>Sweet Dreams</h1>
                  <p>Karineside</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SearchAccordion />
        <HotelFaq />
      </div>
    </>
  );
};

export default Flight;

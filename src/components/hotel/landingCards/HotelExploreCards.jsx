import travelImage from "../../../assets/image/hotel/Travel.svg";
import contactImage from "../../../assets/image/hotel/contact.svg";
import vastImage from "../../../assets/image/hotel/vastSelection.svg";
import partnerImage from "../../../assets/image/hotel/Partner.svg";

const HotelExploreCards = () => {
  return (
    <div className="grid grid-cols-1 max-md:px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 mt-20">
      <div className="hotelBg group duration-300 ease-in-out transition-all rounded-3xl p-5 text-center ">
        <div className="flex justify-center">
          <img className="w-20" src={travelImage} alt="" />
        </div>
        <div className="mt-4 w-5/6 mx-auto">
          <h1 className="text-xl group-hover:text-black font-semibold  text-white">
            Travel with Ease
          </h1>
          <p className="text-lg mt-3 font-medium group-hover:text-[#777E90] text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia.
          </p>
        </div>
        <div>
          <button
            className="mt-5 text-xl text-white group-hover:text-[#1665C8] group-hover:bg-white"
            type="button"
          >
            Explore
          </button>
        </div>
      </div>
      <div className="hotelBg group duration-300 ease-in-out transition-all rounded-3xl p-5 text-center ">
        <div className="flex justify-center">
          <img className="w-20" src={contactImage} alt="" />
        </div>
        <div className="mt-4 w-5/6 mx-auto">
          <h1 className="text-xl group-hover:text-black font-semibold  text-white">
            Trusted Support
          </h1>
          <p className="text-lg mt-3 font-medium group-hover:text-[#777E90] text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia.
          </p>
        </div>
        <div>
          <button
            className="mt-5 text-xl text-white group-hover:text-[#1665C8] group-hover:bg-white"
            type="button"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="hotelBg group duration-300 ease-in-out transition-all rounded-3xl p-5 text-center ">
        <div className="flex justify-center">
          <img className="w-20" src={vastImage} alt="" />
        </div>
        <div className="mt-4 w-5/6 mx-auto">
          <h1 className="text-xl group-hover:text-black font-semibold  text-white">
            Vast Selection
          </h1>
          <p className="text-lg mt-3 font-medium group-hover:text-[#777E90] text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia.
          </p>
        </div>
        <div>
          <button
            className="mt-5 text-xl text-white group-hover:text-[#1665C8] group-hover:bg-white"
            type="button"
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="hotelBg group duration-300 ease-in-out transition-all rounded-3xl p-5 text-center ">
        <div className="flex justify-center">
          <img className="w-20" src={partnerImage} alt="" />
        </div>
        <div className="mt-4 w-5/6 mx-auto">
          <h1 className="text-xl group-hover:text-black font-semibold  text-white">
            Partner With Us{" "}
          </h1>
          <p className="text-lg mt-3 font-medium group-hover:text-[#777E90] text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia.
          </p>
        </div>
        <div>
          <button
            className="mt-5 text-xl text-white group-hover:text-[#1665C8] group-hover:bg-white"
            type="button"
          >
            Become an Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelExploreCards;

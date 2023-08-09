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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FlightOthers from "../../components/flight/FlightOthers";
import FlightSearchResults from "../../components/flight/FlightSearchResults";

const Flight = () => {
  const {isSearchResultAvailable, searchId} = useSelector((state) => state.flight);
  return (
    <>
      {/* flight form strat */}
      <div className="w-[1170px] mx-auto pop-font text-[#0D233E]">
        <FlightForm />
      </div>

      {/* flight form end */}
      <p>{/* {content} */}</p>
      <Divider />
      {/* card 1 strat*/}
      <div className="w-[1170px] mx-auto">
        {isSearchResultAvailable && <FlightSearchResults searchId={searchId}/>}
        {isSearchResultAvailable || <FlightOthers/>}
      </div>
    </>
  );
};

export default Flight;

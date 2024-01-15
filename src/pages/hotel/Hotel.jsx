import { useSelector } from "react-redux";
import HotelFaq from "../../components/hotel/HotelFaq";
import HotelBanner from "../../components/hotel/hotelBanner/HotelBanner";
import HotelSearchForm from "../../components/hotel/hotelSearch/HotelSearchForm";
// import HotelSearch from "../../components/hotel/hotelSearch/HotelSearchForm";
import HotelExploreCards from "../../components/hotel/landingCards/HotelExploreCards";
import NearLogos from "../../components/hotel/landingCards/NearLogos";
import VarietyOfStaysCard from "../../components/hotel/landingCards/VarietyOfStaysCard";
import SearchAccordion from "../../components/hotel/searchAccordion/SearchAccordion";
import WishListItems from "../../components/hotel/wishlist/WishListItems";
import HotelStory from "./HotelStory";
import "./hotel.css";
import HotelSearchResults from "./HotelSearchResults";

const Hotel = () => {
  const {search_session} = useSelector(state=>state.hotelSearch)
  let content = null;
  if(search_session){
    content = <HotelSearchResults/>
  }
  if(!search_session){
    content = <HotelStory/>
  }
  return (
    <section className="max-w-[1170px] mx-auto ">
      <HotelSearchForm/>
      {content}
    </section>
  );
};

export default Hotel;

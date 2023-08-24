import HotelFaq from "../../components/hotel/HotelFaq";
import HotelBanner from "../../components/hotel/hotelBanner/HotelBanner";
import HotelExploreCards from "../../components/hotel/landingCards/HotelExploreCards";
import NearLogos from "../../components/hotel/landingCards/NearLogos";
import VarietyOfStaysCard from "../../components/hotel/landingCards/VarietyOfStaysCard";
import SearchAccordion from "../../components/hotel/searchAccordion/SearchAccordion";
import WishListItems from "../../components/hotel/wishlist/WishListItems";


const HotelStory = () => {
  return (
    <>
      {/* hotel explore*/}
      <HotelExploreCards />
      <HotelBanner />
      {/* Says Near Logos */}
      <NearLogos />
      {/* explore a variety of stays*/}
      <VarietyOfStaysCard />
      {/* wishlist */}
      <WishListItems />
      {/* search accordion */}
      <SearchAccordion />
      {/* frequently asked question */}
      <HotelFaq />
    </>
  );
};

export default HotelStory;

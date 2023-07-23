import HotelSearch from "../../components/hotel/hotelSearch/HotelSearch";
import HotelExploreCards from "../../components/hotel/landingCards/HotelExploreCards";
import NearLogos from "../../components/hotel/landingCards/NearLogos";
import VarietyOfStaysCard from "../../components/hotel/landingCards/VarietyOfStaysCard";
import SearchAccordion from "../../components/hotel/searchAccordion/SearchAccordion";
import WishListItems from "../../components/hotel/wishlist/WishListItems";
import "./hotel.css";

const Hotel = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      {/* Search Hotel */}
      <HotelSearch />
      {/* hotel explore*/}
      <HotelExploreCards />
      {/* Says Near Logos */}
      <NearLogos />
      {/* explore a variety of stays*/}
      <VarietyOfStaysCard />
      {/* wishlist */}
      <WishListItems />
      {/* search accordion */}
      <SearchAccordion />
    </section>
  );
};

export default Hotel;

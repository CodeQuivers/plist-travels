import CheapFlight from "../../components/home/cheapflight/CheapFlight";
import CustomerReview from "../../components/home/customerreview/CustomerReview";
import ExploreAfrica from "../../components/home/exploreafrica/ExploreAfrica";
import ExploreNigeria from "../../components/home/explorenigeria/exploreNigeria";
import ExploreTheWorld from "../../components/home/exploreworld/ExploreTheWorld";
import HeroSection from "../../components/home/hero/HeroSection";
import OurPartner from "../../components/home/ourpartner/OurPartner";
import PlayStore from "../../components/home/playstore/PlayStore";
import PopularFlight from "../../components/home/popularflights/PopularFlight";
import PopularHotel from "../../components/home/popularhotel/PopularHotel";
import PopularTours from "../../components/home/populartours/PopularTours";
import HotelSearch from "../../components/home/search/Search";
import StayInLoop from "../../components/home/stayinloop/StayInLoop";
import Subscribe from "../../components/home/subscribe/Subscribe";
import TrendingAndDestination from "../../components/home/trendinganddestination/TrendingAndDestination";
// import SubHero from "../../components/subhero/SubHero";

const Home = () => {
  return (
    <div className="  mx-auto">
      <HeroSection />
      <HotelSearch />
      <ExploreTheWorld />
      <ExploreNigeria />
      <ExploreAfrica />
      <TrendingAndDestination />
      <PopularHotel />
      <PopularFlight />
      <PopularTours />
      <hr className="bg-[#CBE6F6] border-[1px] mb-[84px]" />
      <CustomerReview />
      <hr className="bg-[#CBE6F6] border-[1px] mt-[84px]" />
      {/* <SubHero /> */}
      <StayInLoop />
      <PlayStore />
      <OurPartner />
      <Subscribe />
      <CheapFlight />
    </div>
  );
};

export default Home;

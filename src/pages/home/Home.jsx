import CustomerReview from "../../components/home/customerreview/CustomerReview";
import ExploreAfrica from "../../components/home/exploreafrica/ExploreAfrica";
import ExploreNigeria from "../../components/home/explorenigeria/exploreNigeria";
import ExploreTheWorld from "../../components/home/exploreworld/ExploreTheWorld";
import HeroSection from "../../components/home/hero/HeroSection";
import PopularFlight from "../../components/home/popularflights/PopularFlight";
import PopularHotel from "../../components/home/popularhotel/PopularHotel";
import PopularTours from "../../components/home/populartours/PopularTours";
import TrendingAndDestination from "../../components/home/trendinganddestination/TrendingAndDestination";

const Home = () => {
  return (
    <div className=" w-auto lg:w-[1170px] mx-auto">
      <HeroSection />
      <ExploreTheWorld />
      <ExploreNigeria />
      <ExploreAfrica />
      <TrendingAndDestination />
      <PopularHotel />
      <PopularFlight />
      <PopularTours />
      <CustomerReview />
    </div>
  );
};

export default Home;

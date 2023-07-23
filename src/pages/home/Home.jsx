import ExploreNigeria from "../../components/home/explorenigeria/exploreNigeria";
import ExploreTheWorld from "../../components/home/exploreworld/ExploreTheWorld";
import HeroSection from "../../components/home/hero/HeroSection";

const Home = () => {
  return (
    <div className=" w-auto lg:w-[1170px] mx-auto">
      <HeroSection />
      <ExploreTheWorld />
      <ExploreNigeria />
    </div>
  );
};

export default Home;

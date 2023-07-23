import ExploreNigeria from "../../components/home/explorenigeria/exploreNigeria";
import ExploreTheWorld from "../../components/home/exploreworld/ExploreTheWorld";
import HeroSection from "../../components/home/hero/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExploreTheWorld />
      <ExploreNigeria />
    </div>
  );
};

export default Home;

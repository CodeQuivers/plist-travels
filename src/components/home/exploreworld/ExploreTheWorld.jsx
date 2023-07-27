import "./exploretheworld.css";
import travel from "../../../assets/image/home/Travel.png";
import partner from "../../../assets/image/home/Partner.png";
import support from "../../../assets/image/home/Suport.png";
import vast from "../../../assets/image/home/Vast.png";

const ExploreTheWorld = () => {
  return (
    <div className="h-[463px] my-[100px] w-auto lg:w-[1170px] mx-auto">
      <div>
        <div className="flex flex-col items-center">
          <h1 className="explore-h1">Explore the world with Us</h1>
          <p className="explore-p1 w-[576px] mt-[12px]">
            Experience cost effective popular destinations, flights, unique
            attractions and more
          </p>
        </div>

        <div className="h-[291px] flex flex-col lg:flex-row gap-[25px] mt-[40px] ">
          <div className="blue-card p-[24px] flex flex-col items-center gap-[12px] w-[274px] ">
            <img src={travel} alt="" />
            <h1 className="card-h1">Travel with Ease</h1>
            <p className="card-p">
              Excepteur sint occae cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <h2 className="card-h2">Explore</h2>
          </div>

          <div className="card-alternative  border-blue-500 border-2 p-[24px] flex flex-col items-center gap-[12px] w-[274px] ">
            <img src={support} alt="" />
            <h1 className="card-a-h1">Trusted Support</h1>
            <p className="card-a-p">
              Excepteur sint occae cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <h2 className="card-a-h2">Contact us</h2>
          </div>

          <div className="blue-card p-[24px] flex flex-col items-center gap-[12px] w-[274px] ">
            <img src={vast} alt="" />
            <h1 className="card-h1">Vast Selection</h1>
            <p className="card-p">
              Excepteur sint occae cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <h2 className="card-h2">Book Now</h2>
          </div>

          <div className="blue-card p-[24px] flex flex-col items-center gap-[12px] w-[274px] ">
            <img src={partner} alt="" />
            <h1 className="card-h1">Partner With Us </h1>
            <p className="card-p">
              Excepteur sint occae cupidatat non proident, sunt in culpa qui
              officia.
            </p>
            <h2 className="card-h2">Become an agent</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTheWorld;

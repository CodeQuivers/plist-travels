import "./populartours.css";
import tour1 from "../../../assets/image/home/tour1.png";
import tour2 from "../../../assets/image/home/tour2.png";
import tour3 from "../../../assets/image/home/tour3.png";

const PopularFlight = () => {
  return (
    <div className="my-[100px]">
      <div>
        <h1 className="popular-flight-h1">Popular Flight</h1>
        <p className="popular-flight-p">Keep calm & travel on</p>
      </div>

      {/* Card Section */}
      <div className="flex flex-col lg:flex-row items-center gap-[24px] mt-[40px] ">
        <div className="rounded-[16px] border relative">
          <img src={tour1} alt="" />
          <h1 className="flight-name absolute bottom-[32px] right-[91.98px] text-center">
            Abuja
          </h1>
        </div>
        <div className=" rounded-[16px] border relative">
          <img src={tour2} alt="" />
          <h1 className="flight-name  absolute bottom-[32px] right-[91.98px] text-center">
            Abuja
          </h1>
        </div>
        <div className=" rounded-[16px] border relative">
          <img src={tour3} alt="" />
          <h1 className="flight-name  absolute bottom-[32px] right-[91.98px] text-center">
            Abuja
          </h1>
        </div>
        <div className=" rounded-[16px] border relative">
          <img src={tour1} alt="" />
          <h1 className="explore-flight-name absolute bottom-[84px] left-[29px]">
            Explore more popular Flight
          </h1>
          <button className="absolute flight-btn bottom-[22px] left-[29px]">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularFlight;

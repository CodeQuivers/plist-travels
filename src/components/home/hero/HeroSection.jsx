import heroImg from "../../../assets/image/home/Frame.png";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center ">
        <div className="w-auto h-[175px]">
          <h1 className="hero-p text-[70px]">
            Amazing{" "}
            <span className="adventure text-[70px] mr-2">adventure</span> <br />
            waiting for you!
          </h1>
        </div>
        <div>
          <img src={heroImg} alt="" className="w-[430px] h-[430px] " />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

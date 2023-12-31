import heroImg from "../../../assets/image/home/Frame.png";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="py-5 w-[1170px] mx-auto ">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
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

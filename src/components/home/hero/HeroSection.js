import heroImg from "../../../assets/image/home/Frame.png";

const HeroSection = () => {
  return (
    <div className="flex mx-auto">
      <div className="w-[690px]">
        <h1 className="hero-p">
          Amazing <span className="adventure">adventure</span>
          waiting for you!
        </h1>
      </div>
      <div>
        <img src={heroImg} alt="" className="w-[430px] h-[430px]" />
      </div>
    </div>
  );
};

export default HeroSection;

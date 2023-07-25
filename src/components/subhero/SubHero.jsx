import "./subhero.css";

const SubHero = () => {
  return (
    <div className=" my-[100px] subhero bg-hero">
      <div className="  flex flex-col justify-center items-center h-[470px] gap-[38px]">
        <h1 className="hero2-h1 w-[1086px]">
          We partner with travel agents across the globe, bringing new realms of
          luxury travel options to your clients.
        </h1>
        <button className="hero2-btn">Become An Agent</button>
      </div>
      <div className="hero2"></div>
    </div>
  );
};

export default SubHero;

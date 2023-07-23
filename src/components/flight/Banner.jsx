import { Link } from "react-router-dom";
import banner from "../../assets/image/flight/images/banner.png";

const Banner = () => {
  return (
    <>
      <div className="my-[70px] relative">
        <h1 className="absolute left-16 top-10 text-7xl w-[554px]">
          Get Place For Your Stories
        </h1>
        <img src={banner} alt="banner" />
        <Link className="text-white absolute left-16 bottom-10 h-[45px] px-[29px] old-logo-color flex items-center rounded">
          Search Deals
        </Link>
      </div>
    </>
  );
};

export default Banner;

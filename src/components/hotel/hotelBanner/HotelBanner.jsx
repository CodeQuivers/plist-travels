import hotelBanner1 from "../../../assets/image/hotel/hotelBanner1.png";
import hotelBanner2 from "../../../assets/image/hotel/hotelBanner2.png";
import svgBannerIcon1 from "../../../assets/image/hotel/svgBannerIcon1.png";
import svgBannerIcon2 from "../../../assets/image/hotel/svgBannerIcon2.png";

const HotelBanner = () => {
  return (
    <div className="pt-20">
      <div className="flex relative justify-between">
        <div>
          <img className="h-[320px]" src={hotelBanner1} alt="" />
          <img
            className="absolute z-10 top-4 -left-8"
            src={svgBannerIcon1}
            alt=""
          />
          <div className="absolute top-[7%]   left-[7%]">
            <h1 className=" text-[80px] text-[#1C2636] leading-tight font-semibold">
              Get Place
            </h1>
            <h1 className="text-[80px] text-[#1C2636] leading-tight font-semibold">
              For <span className="text-[#E43242]">Your Stories</span>
            </h1>
            <button
              className="border px-8 py-3 mt-1 rounded-md  search-now-button-bg text-white "
              type="button"
            >
              Search Deals
            </button>
          </div>

          <img
            className="absolute w-[18%]  left-[25%] top-[68%] "
            src={svgBannerIcon2}
            alt=""
          />
        </div>
        <div>
          <img className="h-[320px]" src={hotelBanner2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HotelBanner;

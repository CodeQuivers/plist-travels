import pic1 from "../../../assets/image/home/a.png";
import pic2 from "../../../assets/image/home/b.png";
import pic3 from "../../../assets/image/home/c.png";
import location from "../../../assets/image/home/location.png";
import location1 from "../../../assets/image/home/location1.png";
import "./trendinganddestination.css";

const TrendingAndDestination = () => {
  return (
    <div className="my-[100px]">
      <div>
        <h1 className="explore-nigeria-h1">Trending Destination </h1>
        <p className="explore-nigeria-p">Keep calm & travel on</p>
      </div>

      {/* featued Button */}
      <div className="flex gap-[6px] my-[45px] items-center">
        <button className="explore-nigeria-btn1 border-2 border-blue-500">
          Featured
        </button>
        <button className="explore-nigeria-btn2">Featured</button>
        <button className="explore-nigeria-btn2">Property Type</button>
        <button className="explore-nigeria-btn2">Tours</button>
        <button className="explore-nigeria-btn2">Flights</button>
        <button className="explore-nigeria-btn2">Vacation Package Deals</button>
      </div>

      {/* Card Section */}
      <div className="h-[381px] w-[265px] flex flex-col lg:flex-row items-center gap-[33px] ">
        {/* card 1 */}
        <div className="flex flex-col border">
          <div>
            <img src={pic1} alt="" className="rounded-t-lg" />
          </div>
          <div className="trending-card rounded-b-xl flex flex-col items-start h-[75px] w-[267px]">
            <div className="flex items-start justify-start my-[22px] gap-[9px] w-[158px] ">
              <div className="rounded-t-xl">
                <img src={location} alt="" className="w-[19px] h-[19px]" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="trending-name">USA</h3>
                <p className="trending-km ">14456 KM</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex flex-col border">
          <div>
            <img src={pic2} alt="" className="rounded-t-lg" />
          </div>
          <div className="trending-card rounded-b-xl flex flex-col items-start h-[75px] w-[267px]">
            <div className="flex items-start justify-start my-[22px] gap-[9px] w-[158px] ">
              <div className="rounded-t-xl">
                <img src={location} alt="" className="w-[19px] h-[19px]" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="trending-name">BANGLADESH</h3>
                <p className="trending-km ">14456 KM</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex flex-col border rounded-xl border-blue-500 ">
          <div>
            <img src={pic3} alt="" className="rounded-t-lg" />
          </div>
          <div className="trending-card1 rounded-b-xl flex flex-col items-start h-[75px] w-[267px]">
            <div className="flex items-start justify-start my-[22px] gap-[9px] w-[158px] ">
              <div>
                <img src={location1} alt="" className="w-[19px] h-[19px]" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="trending-name1">CANADA</h3>
                <p className="trending-km1 ">14456 KM</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="flex flex-col border">
          <div>
            <img src={pic1} alt="" className="rounded-t-lg" />
          </div>
          <div className="trending-card rounded-b-xl flex flex-col items-start h-[75px] w-[267px]">
            <div className="flex items-start justify-start my-[22px] gap-[9px] w-[158px] ">
              <div className="rounded-t-xl">
                <img src={location} alt="" className="w-[19px] h-[19px]" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="trending-name">USA</h3>
                <p className="trending-km ">14456 KM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingAndDestination;

import pic1 from "../../../assets/image/home/d.png";
import pic2 from "../../../assets/image/home/e.png";
import pic3 from "../../../assets/image/home/f.png";
import "./popularhotel.css";

const PopularHotel = () => {
  return (
    <div className=" bg-[#F5FAFF] py-[85px]">
      <div className="my-[100px] w-[1170px] mx-auto">
        <div>
          <h1 className="explore-nigeria-h1">Explore By Popular Hotel</h1>
          <p className="explore-nigeria-p">Keep calm & travel on</p>
        </div>

        {/* Card Section */}
        <div className="h-[381px] w-[265px] flex flex-col lg:flex-row items-center gap-[33px] mt-[40px] ">
          {/* card 1 */}
          <div className="flex flex-col border">
            <div>
              <img src={pic1} alt="" className="rounded-t-lg" />
            </div>
            <div className="popular-card rounded-b-xl flex flex-col items-start h-[75px] w-[267px]">
              <div className="flex items-start justify-start my-[22px] gap-[9px] w-[158px] ">
                <div className="flex flex-col items-start">
                  <h3 className="popular-name">USA</h3>
                  <p className="popular-km ">16,879 properties</p>
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-col border">
            <div>
              <img src={pic2} alt="" className="rounded-t-lg" />
            </div>
            <div className="popular-card rounded-b-xl flex flex-col items-start h-[75px] w-[267px]">
              <div className="flex items-start justify-start my-[22px] gap-[9px] w-[158px] ">
                <div className="flex flex-col items-start">
                  <h3 className="popular-name">BANGLADESH</h3>
                  <p className="popular-km ">6,879 properties</p>
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="flex flex-col border rounded-xl border-blue-500 ">
            <div>
              <img src={pic3} alt="" className="rounded-t-lg" />
            </div>
            <div className="popular-card1 rounded-b-xl flex flex-col items-start h-[75px] w-[267px]">
              <div className="flex items-start justify-start my-[22px] gap-[9px] w-[158px] ">
                <div className="flex flex-col items-start">
                  <h3 className="popular-name1">CANADA</h3>
                  <p className="popular-km1 ">6,879 properties</p>
                </div>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="flex flex-col border">
            <div>
              <img src={pic1} alt="" className="rounded-t-lg" />
            </div>
            <div className="popular-card rounded-b-xl flex flex-col items-start h-[75px] w-[267px]">
              <div className="flex items-start justify-start my-[22px] gap-[9px] w-[158px] ">
                <div className="flex flex-col items-start">
                  <h3 className="popular-name">Cape Town</h3>
                  <p className="popular-km ">6,879 properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularHotel;

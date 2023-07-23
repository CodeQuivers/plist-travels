import star from "../../../assets/image/home/star.png";
import heart from "../../../assets/image/home/Vector.png";
import africa1 from "../../../assets/image/home/africa-1.png";
import africa2 from "../../../assets/image/home/africa-2.png";
import africa3 from "../../../assets/image/home/africa-3.png";
import africa4 from "../../../assets/image/home/africa-4.png";

const ExploreAfrica = () => {
  return (
    <div className="my-[100px]">
      <div>
        <h1 className="explore-nigeria-h1">Explore Africa</h1>
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
      <div className="h-[381px] w-[265px]  flex flex-col lg:flex-row items-center gap-[33px] ">
        {/* card 1 */}
        <div className="flex flex-col  rounded-lg">
          <div className="relative">
            <img src={africa1} alt="" className="rounded-t-lg" />
            <button className="absolute top-[21px] right-[21px]">
              <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
            </button>
          </div>
          <div className="explore-nigeria-card flex flex-col items-start h-[141px] w-[267px]">
            <div className="flex items-start ">
              <div>
                <h3 className="explore-nigeria-name">The grand resort</h3>
                <p className="explore-nigera-location">Karineside</p>
              </div>
              <div>
                <p className="ml-[40px] explore-nigeria-price ">$548</p>
              </div>
            </div>
            <hr className="text-white border-[1px] w-full" />
            <div className="flex items-start explore-nigeria-date">
              <div>
                <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
              </div>
              <div className="flex items-center ml-[40px]">
                <img src={star} alt="" />
                <p className="ml-1">4.9</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex flex-col  rounded-lg">
          <div className="relative">
            <img src={africa2} alt="" className="rounded-t-lg" />
            <button className="absolute top-[21px] right-[21px]">
              <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
            </button>
          </div>
          <div className="explore-nigeria-card flex flex-col items-start h-[141px] w-[267px]">
            <div className="flex items-start ">
              <div>
                <h3 className="explore-nigeria-name">The grand resort</h3>
                <p className="explore-nigera-location">Karineside</p>
              </div>
              <div>
                <p className="ml-[40px] explore-nigeria-price ">$548</p>
              </div>
            </div>
            <hr className="text-white border-[1px] w-full" />
            <div className="flex items-start explore-nigeria-date">
              <div>
                <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
              </div>
              <div className="flex items-center ml-[40px]">
                <img src={star} alt="" />
                <p className="ml-1">4.9</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex flex-col  rounded-lg">
          <div className="relative">
            <img src={africa3} alt="" className="rounded-t-lg" />
            <button className="absolute top-[21px] right-[21px]">
              <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
            </button>
          </div>
          <div className="explore-nigeria-card flex flex-col items-start h-[141px] w-[267px]">
            <div className="flex items-start ">
              <div>
                <h3 className="explore-nigeria-name">The grand resort</h3>
                <p className="explore-nigera-location">Karineside</p>
              </div>
              <div>
                <p className="ml-[40px] explore-nigeria-price ">$548</p>
              </div>
            </div>
            <hr className="text-white border-[1px] w-full" />
            <div className="flex items-start explore-nigeria-date">
              <div>
                <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
              </div>
              <div className="flex items-center ml-[40px]">
                <img src={star} alt="" />
                <p className="ml-1">4.9</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="flex flex-col border border-blue-500 rounded-lg">
          <div className="relative">
            <img src={africa4} alt="" className="rounded-t-lg" />
            <button className="absolute top-[21px] right-[21px]">
              <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
            </button>
          </div>
          <div className="explore-nigeria-card1 flex flex-col items-start h-[141px] w-[267px]">
            <div className="flex items-start ">
              <div>
                <h3 className="explore-nigeria-name1">The Sea View</h3>
                <p className="explore-nigera-location1">Karineside</p>
              </div>
              <div>
                <p className="ml-[40px] explore-nigeria-price1 ">$548</p>
              </div>
            </div>
            <hr className="text-white border-[1px] w-full" />
            <div className="flex items-start explore-nigeria-date1">
              <div>
                <span>Tue, Jul 20</span> - <span>Fri, Jul 23</span>
              </div>
              <div className="flex items-center ml-[40px]">
                <img src={star} alt="" />
                <p className="ml-1">4.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreAfrica;

import "./subscribe.css";
import arrow from "../../../assets/image/home/Vector-arrow.png";
import elp1 from "../../../assets/image/home/elipse/Ellipse32.svg";
import elp2 from "../../../assets/image/home/elipse/Ellipse33.svg";
import elp3 from "../../../assets/image/home/elipse/Ellipse34.svg";
import elp4 from "../../../assets/image/home/elipse/Ellipse35.svg";
import elp5 from "../../../assets/image/home/elipse/Ellipse36.svg";
import elp6 from "../../../assets/image/home/elipse/Ellipse37.svg";
// Upper Left elipse
import elipseRight1 from "../../../assets/image/home/elipseRight/elipseRight1.svg";
import elipseRight2 from "../../../assets/image/home/elipseRight/elipseRight2.svg";
import elipseRight3 from "../../../assets/image/home/elipseRight/elipseRight3.svg";
import elipseRight4 from "../../../assets/image/home/elipseRight/elipseRight4.svg";
import elipseRight5 from "../../../assets/image/home/elipseRight/elipseRight5.svg";
import elipseRight6 from "../../../assets/image/home/elipseRight/elipseRight6.svg";

const Subscribe = () => {
  return (
    <div className="w-[1170px] h-[460px] my-28 mx-auto relative bg-[#F0F5FA] rounded-2xl rounded-tl-[150px] flex flex-col items-center justify-center">
      <div className="w-20 h-20 old-logo-color rounded-full absolute -top-5 -right-5 flex items-center justify-center z-10">
        <img src={arrow} alt="" className=" subscribe-arrow " />
      </div>
      {/* Upper Right */}

      <div className="elp-upper-right">
        <img className="w-full h-full" src={elipseRight6} alt="" />
      </div>
      <div className="elp-upper-right">
        <img className="w-full h-full" src={elipseRight5} alt="" />
      </div>
      <div className="elp-upper-right">
        <img className="w-full h-full" src={elipseRight4} alt="" />
      </div>
      <div className="elp-upper-right">
        <img className="w-full h-full" src={elipseRight3} alt="" />
      </div>
      <div className="elp-upper-right">
        <img className="w-full h-full" src={elipseRight2} alt="" />
      </div>
      <div className="elp-upper-right">
        <img className="w-full h-full" src={elipseRight1} alt="" />
      </div>

      {/* subscription text */}

      <div className="w-[88%] flex flex-col items-center gap-16 z-[10]">
        <h2 className="text-[#405E85] text-4xl text-center font-bold dmsan-font">
          Subscribe to get information, Latest News And Other Interesting about
          cobham
        </h2>
        <div className="flex items-center">
          <input
            type="text"
            className="w-[427px] py-5 pl-5 rounded-s-md"
            placeholder="Enter your email address"
          />
          <button className="old-logo-color py-4 px-9 rounded-e-md text-2xl text-white">Subscribe</button>
        </div>
      </div>
      {/* bottom left */}
      <div className="subscribe-img img4">
        <img className="w-full h-full rounded-2xl" src={elp6} alt="" />
      </div>
      <div className="subscribe-img img4">
        <img className="w-full h-full rounded-2xl" src={elp5} alt="" />
      </div>
      <div className="subscribe-img img4">
        <img className="w-full h-full rounded-2xl" src={elp4} alt="" />
      </div>
      <div className="subscribe-img  img3">
        <img className="w-full h-full rounded-2xl" src={elp3} alt="" />
      </div>
      <div className="subscribe-img img2">
        <img className="w-full h-full rounded-2xl" src={elp2} alt="" />
      </div>
      <div className="subscribe-img img1 ">
        <img className="w-full h-full rounded-2xl" src={elp1} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;

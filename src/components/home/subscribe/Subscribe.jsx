import "./subscribe.css";
import arrow from "../../../assets/image/home/Vector-arrow.png";

const Subscribe = () => {
  return (
    <div className="subscribe my-[100px] w-[1170px] mx-auto flex flex-col items-center justify-center gap-[66px] relative">
      <div className="w-[80px] h-[80px] bg-blue-500 rounded-full absolute top-[-20px] right-[-20px] flex items-center justify-center">
        <img src={arrow} alt="" className=" subscribe-arrow " />
      </div>
      <div>
        <h1 className="subscribe-h1 px-[79px]">
          Subscribe to get information, Latest News And Other Interesting about
          cobham
        </h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="subscribe-input"
          placeholder="Enter your email address"
        />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;

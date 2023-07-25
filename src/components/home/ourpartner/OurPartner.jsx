import "./ourpartner.css";
import logo1 from "../../../assets/image/home/Logo 1.png";
import logo2 from "../../../assets/image/home/Logo 2.png";
import logo3 from "../../../assets/image/home/Logo 3.png";
import logo4 from "../../../assets/image/home/Logo 4.png";
import logo5 from "../../../assets/image/home/Logo 5.png";
import logo6 from "../../../assets/image/home/Logo 6.png";

const OurPartner = () => {
  return (
    <div className="w-[1170px] mx-auto my-[100px]">
      <div className="flex flex-col items-center">
        <h1 className="partner-h1">Check out some of our Partners</h1>
        <p className="partner-p">Keep calm & travel on</p>
      </div>

      <div className="flex items-center gap-[56px] mt-[42px]">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
      </div>
    </div>
  );
};

export default OurPartner;

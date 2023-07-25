import "./playstore.css";
import phone from "../../../assets/image/home/playstore.png";
import check from "../../../assets/image/home/check-square - Copy.png";
import apple from "../../../assets/image/home/apple.png";
import google from "../../../assets/image/home/google.png";

const PlayStore = () => {
  return (
    <div className="playstore ">
      <div className="flex justify-between items-center w-[1170px] mx-auto">
        <div>
          <img src={phone} alt="" />
        </div>
        <div>
          <h1 className="playstore-h1">
            Plist Android and IOS App is Available!
          </h1>
          <div className="mt-[31px] flex flex-col gap-[16px]">
            <div className="flex items-center gap-[18px]">
              <img src={check} alt="" />
              <p className="playstore-p">
                Access and change your itinerary on-the-go
              </p>
            </div>
            <div className="flex items-center gap-[18px]">
              <img src={check} alt="" />
              <p className="playstore-p">Free cancellation on select hotels</p>
            </div>
            <div className="flex items-center gap-[18px]">
              <img src={check} alt="" />
              <p className="playstore-p">Get real-time trip updates</p>
            </div>
          </div>
          <div className="flex items-center gap-[30px] mt-[50px] ">
            <img src={apple} alt="" />
            <img src={google} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStore;

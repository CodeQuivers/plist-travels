import "./customerreview.css";
import reviewer from "../../../assets/image/home/Ellipse 39.png";
import vector from "../../../assets/image/home/Vector1.png";
import star from "../../../assets/image/home/Icon Small.png";

const CustomerReview = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="customer-review-h1">Hear From Our Customers</h1>
        <p className="customer-review-p">Keep calm & travel on</p>
      </div>
      <div className="flex gap-[34px] mt-[40px]">
        {/* Card 1 */}
        <div className="review-card w-[267px] h-[381px] relative">
          <div className="">
            <img
              src={vector}
              alt=""
              className="absolute left-[122.725px] top-[27.685px]"
            />
            <p className="reviewer-comment absolute top-[76.771px] left-[26px] w-[216px] h-[117px]">
              Making my own card and choosing my own number is a whole new
              experience for me. Nice work for this super features
            </p>
            <div className="flex items-center gap-[1px] absolute top-[219px] left-[66px]">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <hr className="absolute border-[1px] border-[#CFCFCF] top-[268px] w-[267px] " />
          </div>
          <div className="flex justify-center items-center gap-[16px] absolute bottom-[40px] left-[62px]">
            <div>
              <img src={reviewer} alt="" className="rounded-[35px]" />
            </div>
            <div className="flex flex-col items-start gap-[1px] ">
              <h3 className="reviewer-name">Albert Cyrill</h3>
              <p className="reviewer-date">17 Oct, 2020</p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="review-card w-[267px] h-[381px] relative">
          <div className="">
            <img
              src={vector}
              alt=""
              className="absolute left-[122.725px] top-[27.685px]"
            />
            <p className="reviewer-comment absolute top-[76.771px] left-[26px] w-[216px] h-[117px]">
              Making my own card and choosing my own number is a whole new
              experience for me. Nice work for this super features
            </p>
            <div className="flex items-center gap-[1px] absolute top-[219px] left-[66px]">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <hr className="absolute border-[1px] border-[#CFCFCF] top-[268px] w-[267px] " />
          </div>
          <div className="flex justify-center items-center gap-[16px] absolute bottom-[40px] left-[62px]">
            <div>
              <img src={reviewer} alt="" className="rounded-[35px]" />
            </div>
            <div className="flex flex-col items-start gap-[1px] ">
              <h3 className="reviewer-name">Albert Cyrill</h3>
              <p className="reviewer-date">17 Oct, 2020</p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="review-card w-[267px] h-[381px] relative">
          <div className="">
            <img
              src={vector}
              alt=""
              className="absolute left-[122.725px] top-[27.685px]"
            />
            <p className="reviewer-comment absolute top-[76.771px] left-[26px] w-[216px] h-[117px]">
              Making my own card and choosing my own number is a whole new
              experience for me. Nice work for this super features
            </p>
            <div className="flex items-center gap-[1px] absolute top-[219px] left-[66px]">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <hr className="absolute border-[1px] border-[#CFCFCF] top-[268px] w-[267px] " />
          </div>
          <div className="flex justify-center items-center gap-[16px] absolute bottom-[40px] left-[62px]">
            <div>
              <img src={reviewer} alt="" className="rounded-[35px]" />
            </div>
            <div className="flex flex-col items-start gap-[1px] ">
              <h3 className="reviewer-name">Albert Cyrill</h3>
              <p className="reviewer-date">17 Oct, 2020</p>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="review-card w-[267px] h-[381px] relative">
          <div className="">
            <img
              src={vector}
              alt=""
              className="absolute left-[122.725px] top-[27.685px]"
            />
            <p className="reviewer-comment absolute top-[76.771px] left-[26px] w-[216px] h-[117px]">
              Making my own card and choosing my own number is a whole new
              experience for me. Nice work for this super features
            </p>
            <div className="flex items-center gap-[1px] absolute top-[219px] left-[66px]">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <hr className="absolute border-[1px] border-[#CFCFCF] top-[268px] w-[267px] " />
          </div>
          <div className="flex justify-center items-center gap-[16px] absolute bottom-[40px] left-[62px]">
            <div>
              <img src={reviewer} alt="" className="rounded-[35px]" />
            </div>
            <div className="flex flex-col items-start gap-[1px] ">
              <h3 className="reviewer-name">Albert Cyrill</h3>
              <p className="reviewer-date">17 Oct, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;

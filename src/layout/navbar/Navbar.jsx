import { Link } from "react-router-dom";
import logo from "../../assets/image/navbar/logo.png";
import "./navbar.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import avater from "../../assets/image/navbar/avatar.png";
import subMenu from "../../assets/image/navbar/align-justify.png";

const Navbar = () => {
  return (
    <div className="bg-[#EBF3FB] h-[92px]">
      <div className="mx-auto py-[35px] flex items-center justify-center ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-[23px] text-[#777E90] ml-[127px]">
          <Link to="">Home</Link>
          <Link to="">Hotel/Stays</Link>
          <Link to="">Flight</Link>
          <Link to="">Tours</Link>
          <Link to="">Transfer</Link>
        </div>
        <div className="flex gap-[24px] ml-[31px] items-center">
          <div className=" btn-1 w-[116px] h-[40px] ">
            <select
              name=""
              id=""
              className=" bg-[#EBF3FB] text-[#777E90] text-[14px] font-medium text-center "
            >
              <option value="">
                {" "}
                <span className=" text-[black] w-[16px] h-[16px]">
                  <RiMoneyDollarCircleLine />
                </span>{" "}
                <span>USD</span>
              </option>
            </select>
          </div>
          <div className="btn-2 w-[116px] h-[40px]">
            <select name="" id="" className="text-[#777E90] text-[14px]">
              <option value="">EG</option>
            </select>
          </div>
          <div>
            <img
              src={avater}
              alt=""
              className="w-[40px] h-[40px] rounded-[40px] ]"
            />
          </div>
        </div>
        <div className="ml-[25px] flex items-center">
          <button className="btn-3">Become an Agent</button>
          <img src={subMenu} alt="" className="w-[36px] h-[36px] ml-[27px]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

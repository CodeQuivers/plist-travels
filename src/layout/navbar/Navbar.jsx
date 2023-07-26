import { Link } from "react-router-dom";
import logo from "../../assets/image/navbar/logo.png";
import "./navbar.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import avater from "../../assets/image/navbar/avatar.png";
import subMenu from "../../assets/image/navbar/align-justify.png";
import close from "../../assets/image/home/x.png";
import { useState } from "react";
import SubNav from "./SubNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const subNavs = [
    { id: 1, title: "About Us", to: "/aboutus" },
    { id: 2, title: "Travel", to: "/travel" },
    { id: 3, title: "Service", to: "/service" },
    { id: 4, title: "Job", to: "/job" },
    { id: 5, title: "Blog", to: "/blog" },
    { id: 6, title: "Support", to: "/support" },
    { id: 7, title: "business/corporate trip", to: "/corporate-trip" },
    { id: 8, title: "Return Policy", to: "/returnpolicy" },
    { id: 9, title: "List Your Property", to: "/property" },
  ];

  return (
    <nav className="bg-[#EBF3FB] h-[92px] sticky top-0 z-50 ">
      <div className="mx-auto py-[35px] flex items-center justify-center ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-[23px] text-[#777E90] ml-[127px]">
          <Link to="/">Home</Link>
          <Link to="/hotel">Hotel/Stays</Link>
          <Link to="/flight">Flight</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/transfer">Transfer</Link>
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
          {open && (
            <img
              src={subMenu}
              alt=""
              className="w-[36px] h-[36px] ml-[27px] "
              onClick={() => setOpen(!open)}
            />
          )}

          {!open && (
            <img
              src={subMenu}
              alt=""
              className="w-[36px] h-[36px] ml-[27px] "
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
      </div>

      {/* <div>
        <ul
          className={` absolute bg-[#fff] duration-500 ease-in-out flex flex-col items-start  gap-[20px]  ${
            open ? "right-0" : "-right-2/3"
          }`}
        >
          {subNavs.map((nav) => (
            <SubNav nav={nav} key={nav.id}></SubNav>
          ))}
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;

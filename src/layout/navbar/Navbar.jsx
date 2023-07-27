import { Link } from "react-router-dom";
import logo from "../../assets/image/navbar/logo.png";
import "./navbar.css";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import avater from "../../assets/image/navbar/avatar.png";
import subMenu from "../../assets/image/navbar/align-justify.png";
import close from "../../assets/image/home/x.png";
import { useState } from "react";
import SubNav from "./SubNav";
import SubMenu from "./SubMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

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
    <>
      <nav className="bg-[#EBF3FB] h-[88px] sticky top-0 z-50 flex items-center transition-opacity transition-transform duration-600 delay-500">
        <div className="w-[1170px] mx-auto flex items-center justify-between">
          <div className="w-1/12">
            <img src={logo} alt="" />
          </div>
          <div className="w-[82%] flex justify-between">
            {/* home, hotel, flight, tours, transfer */}
            <div className="flex items-center gap-6 text-[#777E90]">
              <Link to="/">Home</Link>
              <Link to="/hotel">Hotel/Stays</Link>
              <Link to="/flight">Flight</Link>
              <Link to="/tours">Tours</Link>
              <Link to="/transfer">Transfer</Link>
            </div>

            <div className="flex gap-4 items-center">
              <div className=" btn-1 w-[116px] h-[40px] ">
                <select
                  name=""
                  id=""
                  className=" bg-[#EBF3FB] text-[#777E90] text-[14px] font-medium text-center "
                >
                  <option value="">
                    <span className=" text-[black] w-[16px] h-[16px]">
                      <RiMoneyDollarCircleLine />
                    </span>
                    <span>USD</span>
                  </option>
                </select>
              </div>
              <div className="btn-2 w-[116px] h-[40px]">
                <select name="" id="" className="text-[#777E90] text-[14px]">
                  <option value="">EG</option>
                </select>
              </div>
            </div>
            <div>
              <img
                src={avater}
                alt="avatar of the user"
                className="w-10 h-10 rounded-full ]"
              />
            </div>
            <div className="w-48 flex items-center">
              <button className="old-logo-color px-6 py-4 rounded-xl font-bold text-white">
                Become an Agent
              </button>
            </div>
            <div className="w-9 flex items-center">
              <button onClick={()=>setIsSubMenuOpen(true)}>
                <img className="w-9 h-9" src={subMenu} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {
        isSubMenuOpen && <SubMenu setIsSubMenuOpen={setIsSubMenuOpen} />
      }
    </>
  );
};

export default Navbar;

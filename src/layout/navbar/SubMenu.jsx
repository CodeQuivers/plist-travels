/* eslint-disable react/prop-types */

import crossIcon from "../../assets/image/navbar/crossIcon.svg";
import { Link } from "react-router-dom";

const SubMenu = ({ setIsSubMenuOpen }) => {
  return (
    <div className="fixed bg-black/40 h-screen top-0 mt-0 w-full z-[70] inset-[-0px]">
      <div className="grad-border-olc w-1/3 bg-white mr-0 ml-auto h-screen p-8 flex flex-col gap-24">
        <div className="flex justify-end">
          <div
            onClick={() => setIsSubMenuOpen(false)}
            className="w-8 h-8 hover:cursor-pointer"
          >
            <img src={crossIcon} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <Link className="text-2xl font-semibold grad-text-olc pop-font">
              About Us
            </Link>
          </div>
          <div>
            <Link className="text-2xl font-semibold grad-text-olc pop-font">
              Travel
            </Link>
          </div>
          <div>
            <Link
              className="text-2xl font-semibold grad-text-olc pop-font"
              to={`/services`}
              onClick={() => setIsSubMenuOpen(false)}
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              className="text-2xl font-semibold grad-text-olc pop-font"
              to={`/jobs`}
              onClick={() => setIsSubMenuOpen(false)}
            >
              Jobs
            </Link>
          </div>
          <div>
            <Link
              to={`/blogs`}
              className="text-2xl font-semibold grad-text-olc pop-font"
            >
              Blog
            </Link>
          </div>
          <div>
            <Link
              to={`/support`}
              className="text-2xl font-semibold grad-text-olc pop-font"
            >
              Support
            </Link>
          </div>
          <div>
            <Link className="text-2xl font-semibold grad-text-olc pop-font">
              business/Corporate Trip
            </Link>
          </div>
          <div>
            <Link className="text-2xl font-semibold grad-text-olc pop-font">
              Return Policy
            </Link>
          </div>
          <div>
            <Link
              to={`/add-property`}
              className="text-2xl font-semibold grad-text-olc pop-font"
            >
              List Your Property
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;

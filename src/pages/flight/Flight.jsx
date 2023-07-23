import flightFrom from "../../assets/image/flight/icons/FlightFrom.png";
import depature from "../../assets/image/flight/icons/depature.png";
import flightTo from "../../assets/image/flight/icons/flightTo.png";
import returnCalender from "../../assets/image/flight/icons/return-calender.png";
import DropDown from "../../components/flight/DropDown";
import Divider from "../../components/tours/Divider";
import Card1 from "../../components/flight/Card1";
import globalWorld from "../../assets/image/flight/icons/globalWorld.svg";
import suport from "../../assets/image/flight/icons/Suport.svg";
import vast from "../../assets/image/flight/icons/Vast.svg";
import partner from "../../assets/image/flight/icons/Partner.svg";
import { Link } from "react-router-dom";

const Flight = () => {
  return (
    <div className="w-[1170px] mx-auto">
      <div className="h-[416px] mt-16 pl-[42px] rounded-lg border-2 border-indigo-800 pt-[90px]">
        <div className="inline-flex items-start gap-7">
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="" />
            <p>One way</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="" />
            <p>Round-Trip</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="" />
            <p>Direct Flight</p>
          </div>
        </div>

        {/*  */}
        <div className="mt-5 flex gap-2">
          <div className="w-[265px] pt-[2px] pr-[26px]">
            <p>Flying From</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={flightFrom} alt="flightFromIcon" className="w-5" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
          <div className="w-[265px] pt-[2px] pr-[26px]">
            <p>Flying To</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={flightTo} alt="flightFromIcon" className="w-5" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
          <div className="w-[265px] pt-[2px] pr-[26px]">
            <p>Flying From</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={depature} alt="flightFromIcon" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
          <div className="w-[265px] pt-[2px] pr-[26px]">
            <p>Flying From</p>
            <div className="relative">
              <span className="absolute top-0 left-3 h-full flex items-center justify-center">
                <img src={returnCalender} alt="flightFromIcon" />
              </span>
              <input
                type="text"
                className="mt-2 pl-10 w-[243px] border-2 border-gray-300 h-12 rounded"
                placeholder="Delhi and NCR, India"
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <div className="mt-5 flex gap-2">
            <div className="w-[265px] pt-[2px] pr-7">
              <p>Traveler</p>
              <DropDown />
            </div>
            <div className="w-[265px] pt-[2px] pr-7">
              <p>Coach</p>
              <DropDown />
            </div>
            <div className="flex items-end">
              <input
                className="w-[250px] h-[47px] old-logo-color text-white rounded-lg"
                type="submit"
                value="Search Now"
              />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      {/* card */}
      <div className="flex justify-center gap-6">
        <div className="flex-col flex rounded-2xl items-center w-[274px] old-logo-color p-6 text-white">
          <img
            className="pb-[15px] w-[69px]"
            src={globalWorld}
            alt="globalWorld"
          />
          <h3 className="pb-[10px]">Travel with Ease</h3>
          <p className="pb-5">
            Excepteur sint occae cupidatat non proident, sunt in culpa qui
            officia.
          </p>
          <Link>Explore</Link>
        </div>
        <div className="flex-col flex rounded-2xl items-center w-[274px] old-logo-color p-6 text-white">
          <img
            className="pb-[15px] w-[69px]"
            src={globalWorld}
            alt="globalWorld"
          />
          <h3 className="pb-[10px]">Travel with Ease</h3>
          <p className="pb-5">
            Excepteur sint occae cupidatat non proident, sunt in culpa qui
            officia.
          </p>
          <Link>Explore</Link>
        </div>
        <div className="flex-col flex rounded-2xl items-center w-[274px] old-logo-color p-6 text-white">
          <img
            className="pb-[15px] w-[69px]"
            src={globalWorld}
            alt="globalWorld"
          />
          <h3 className="pb-[10px]">Travel with Ease</h3>
          <p className="pb-5">
            Excepteur sint occae cupidatat non proident, sunt in culpa qui
            officia.
          </p>
          <Link>Explore</Link>
        </div>
        <div className="flex-col flex rounded-2xl items-center w-[274px] old-logo-color p-6 text-white">
          <img
            className="pb-[15px] w-[69px]"
            src={globalWorld}
            alt="globalWorld"
          />
          <h3 className="pb-[10px]">Travel with Ease</h3>
          <p className="pb-5">
            Excepteur sint occae cupidatat non proident, sunt in culpa qui
            officia.
          </p>
          <Link>Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Flight;

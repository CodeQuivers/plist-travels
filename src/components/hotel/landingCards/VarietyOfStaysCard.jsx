import landscapeImage from "../../../assets/image/hotel/landscape.png";
import { FaChevronRight, FaRegHeart } from "react-icons/fa6";
import { GiRoundStar } from "react-icons/gi";
import { FaChevronLeft } from "react-icons/fa";

const VarietyOfStaysCard = () => {
  return (
    <div className="mt-20 max-md:px-5 ">
      {/* section title */}
      <div className="my-10">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
          Explore A Variety Of Stays
        </h1>
      </div>

      {/* section cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-around">
        <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl    ">
          <div className="hotelCardBg  group-hover:bg-white ">
            <div className="relative">
              <img className="w-full" src={landscapeImage} alt="" />

              <div>
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                >
                  <FaRegHeart size={20} />
                </button>
                <p className="absolute border border-[#287dfa] bottom-2 left-2 px-2.5 py-1 rounded bg-white defaultColorBorder text-sm  text-black border-">
                  Room Only
                </p>
              </div>
            </div>
            <div className="flex my-5 justify-between items-center px-5">
              <div>
                <h4 className="text-white font-medium group-hover:text-black">
                  Sweet Dreams
                </h4>
                <p className="text-xs group-hover:text-black font-medium text-white">
                  Karineside
                </p>
              </div>
              <div>
                <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                  $548
                </h3>
              </div>
            </div>
            <hr className="py-2 w-[85%] mx-auto" />
            <div className="flex pb-5 items-center justify-between px-5">
              <button
                className="bg-white text-[#1665C8] px-2.5 border border-[#1665C8] rounded-md text-sm font-medium py-0.5"
                type="button"
              >
                Show Map
              </button>
              <p className="flex text-white group-hover:text-black gap-2 ">
                <GiRoundStar className="mt-0.5 text-[#FFD166]" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl    ">
          <div className="hotelCardBg  group-hover:bg-white ">
            <div className="relative">
              <img className="w-full" src={landscapeImage} alt="" />

              <div>
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                >
                  <FaRegHeart size={20} />
                </button>
                <p className="absolute border border-[#287dfa] bottom-2 left-2 px-2.5 py-1 rounded bg-white defaultColorBorder text-sm  text-black border-">
                  Room Only
                </p>
              </div>
            </div>
            <div className="flex my-5 justify-between items-center px-5">
              <div>
                <h4 className="text-white font-medium group-hover:text-black">
                  Sweet Dreams
                </h4>
                <p className="text-xs group-hover:text-black font-medium text-white">
                  Karineside
                </p>
              </div>
              <div>
                <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                  $548
                </h3>
              </div>
            </div>
            <hr className="py-2 w-[85%] mx-auto" />
            <div className="flex pb-5 items-center justify-between px-5">
              <button
                className="bg-white text-[#1665C8] px-2.5 border border-[#1665C8] rounded-md text-sm font-medium py-0.5"
                type="button"
              >
                Show Map
              </button>
              <p className="flex text-white group-hover:text-black gap-2 ">
                <GiRoundStar className="mt-0.5 text-[#FFD166]" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl    ">
          <div className="hotelCardBg  group-hover:bg-white ">
            <div className="relative">
              <img className="w-full" src={landscapeImage} alt="" />

              <div>
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                >
                  <FaRegHeart size={20} />
                </button>
                <p className="absolute border border-[#287dfa] bottom-2 left-2 px-2.5 py-1 rounded bg-white defaultColorBorder text-sm  text-black border-">
                  Room Only
                </p>
              </div>
            </div>
            <div className="flex my-5 justify-between items-center px-5">
              <div>
                <h4 className="text-white font-medium group-hover:text-black">
                  Sweet Dreams
                </h4>
                <p className="text-xs group-hover:text-black font-medium text-white">
                  Karineside
                </p>
              </div>
              <div>
                <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                  $548
                </h3>
              </div>
            </div>
            <hr className="py-2 w-[85%] mx-auto" />
            <div className="flex pb-5 items-center justify-between px-5">
              <button
                className="bg-white text-[#1665C8] px-2.5 border border-[#1665C8] rounded-md text-sm font-medium py-0.5"
                type="button"
              >
                Show Map
              </button>
              <p className="flex text-white group-hover:text-black gap-2 ">
                <GiRoundStar className="mt-0.5 text-[#FFD166]" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl    ">
          <div className="hotelCardBg  group-hover:bg-white ">
            <div className="relative">
              <img className="w-full" src={landscapeImage} alt="" />

              <div>
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                >
                  <FaRegHeart size={20} />
                </button>
                <p className="absolute border border-[#287dfa] bottom-2 left-2 px-2.5 py-1 rounded bg-white defaultColorBorder text-sm  text-black border-">
                  Room Only
                </p>
              </div>
            </div>
            <div className="flex my-5 justify-between items-center px-5">
              <div>
                <h4 className="text-white font-medium group-hover:text-black">
                  Sweet Dreams
                </h4>
                <p className="text-xs group-hover:text-black font-medium text-white">
                  Karineside
                </p>
              </div>
              <div>
                <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                  $548
                </h3>
              </div>
            </div>
            <hr className="py-2 w-[85%] mx-auto" />
            <div className="flex pb-5 items-center justify-between px-5">
              <button
                className="bg-white text-[#1665C8] px-2.5 border border-[#1665C8] rounded-md text-sm font-medium py-0.5"
                type="button"
              >
                Show Map
              </button>
              <p className="flex text-white group-hover:text-black gap-2 ">
                <GiRoundStar className="mt-0.5 text-[#FFD166]" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl    ">
          <div className="hotelCardBg  group-hover:bg-white ">
            <div className="relative">
              <img className="w-full" src={landscapeImage} alt="" />

              <div>
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                >
                  <FaRegHeart size={20} />
                </button>
                <p className="absolute border border-[#287dfa] bottom-2 left-2 px-2.5 py-1 rounded bg-white defaultColorBorder text-sm  text-black border-">
                  Room Only
                </p>
              </div>
            </div>
            <div className="flex my-5 justify-between items-center px-5">
              <div>
                <h4 className="text-white font-medium group-hover:text-black">
                  Sweet Dreams
                </h4>
                <p className="text-xs group-hover:text-black font-medium text-white">
                  Karineside
                </p>
              </div>
              <div>
                <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                  $548
                </h3>
              </div>
            </div>
            <hr className="py-2 w-[85%] mx-auto" />
            <div className="flex pb-5 items-center justify-between px-5">
              <button
                className="bg-white text-[#1665C8] px-2.5 border border-[#1665C8] rounded-md text-sm font-medium py-0.5"
                type="button"
              >
                Show Map
              </button>
              <p className="flex text-white group-hover:text-black gap-2 ">
                <GiRoundStar className="mt-0.5 text-[#FFD166]" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl    ">
          <div className="hotelCardBg  group-hover:bg-white ">
            <div className="relative">
              <img className="w-full" src={landscapeImage} alt="" />

              <div>
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                >
                  <FaRegHeart size={20} />
                </button>
                <p className="absolute border border-[#287dfa] bottom-2 left-2 px-2.5 py-1 rounded bg-white defaultColorBorder text-sm  text-black border-">
                  Room Only
                </p>
              </div>
            </div>
            <div className="flex my-5 justify-between items-center px-5">
              <div>
                <h4 className="text-white font-medium group-hover:text-black">
                  Sweet Dreams
                </h4>
                <p className="text-xs group-hover:text-black font-medium text-white">
                  Karineside
                </p>
              </div>
              <div>
                <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                  $548
                </h3>
              </div>
            </div>
            <hr className="py-2 w-[85%] mx-auto" />
            <div className="flex pb-5 items-center justify-between px-5">
              <button
                className="bg-white text-[#1665C8] px-2.5 border border-[#1665C8] rounded-md text-sm font-medium py-0.5"
                type="button"
              >
                Show Map
              </button>
              <p className="flex text-white group-hover:text-black gap-2 ">
                <GiRoundStar className="mt-0.5 text-[#FFD166]" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl    ">
          <div className="hotelCardBg  group-hover:bg-white ">
            <div className="relative">
              <img className="w-full" src={landscapeImage} alt="" />

              <div>
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                >
                  <FaRegHeart size={20} />
                </button>
                <p className="absolute border border-[#287dfa] bottom-2 left-2 px-2.5 py-1 rounded bg-white defaultColorBorder text-sm  text-black border-">
                  Room Only
                </p>
              </div>
            </div>
            <div className="flex my-5 justify-between items-center px-5">
              <div>
                <h4 className="text-white font-medium group-hover:text-black">
                  Sweet Dreams
                </h4>
                <p className="text-xs group-hover:text-black font-medium text-white">
                  Karineside
                </p>
              </div>
              <div>
                <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                  $548
                </h3>
              </div>
            </div>
            <hr className="py-2 w-[85%] mx-auto" />
            <div className="flex pb-5 items-center justify-between px-5">
              <button
                className="bg-white text-[#1665C8] px-2.5 border border-[#1665C8] rounded-md text-sm font-medium py-0.5"
                type="button"
              >
                Show Map
              </button>
              <p className="flex text-white group-hover:text-black gap-2 ">
                <GiRoundStar className="mt-0.5 text-[#FFD166]" />
                4.9
              </p>
            </div>
          </div>
        </div>
        <div className="group duration-300 ease-linear  transition-all w-full rounded-3xl    ">
          <div className="hotelCardBg  group-hover:bg-white ">
            <div className="relative">
              <img className="w-full" src={landscapeImage} alt="" />

              <div>
                <button
                  type="button"
                  className="absolute top-3 right-3 bg-white p-1 rounded-lg"
                >
                  <FaRegHeart size={20} />
                </button>
                <p className="absolute border border-[#287dfa] bottom-2 left-2 px-2.5 py-1 rounded bg-white defaultColorBorder text-sm  text-black border-">
                  Room Only
                </p>
              </div>
            </div>
            <div className="flex my-5 justify-between items-center px-5">
              <div>
                <h4 className="text-white font-medium group-hover:text-black">
                  Sweet Dreams
                </h4>
                <p className="text-xs group-hover:text-black font-medium text-white">
                  Karineside
                </p>
              </div>
              <div>
                <h3 className="border-2 px-2 py-1 rounded-md text-sm font-semibold group-hover:text-green-600 border-white group-hover:border-green-600 text-white">
                  $548
                </h3>
              </div>
            </div>
            <hr className="py-2 w-[85%] mx-auto" />
            <div className="flex pb-5 items-center justify-between px-5">
              <button
                className="bg-white text-[#1665C8] px-2.5 border border-[#1665C8] rounded-md text-sm font-medium py-0.5"
                type="button"
              >
                Show Map
              </button>
              <p className="flex text-white group-hover:text-black gap-2 ">
                <GiRoundStar className="mt-0.5 text-[#FFD166]" />
                4.9
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="flex gap-3 justify-center pb-20 pt-20">
        <button className="border-r pr-2" type="button">
          {" "}
          <FaChevronLeft size={15} />
        </button>
        <div className="flex    justify-center items-center  text-xl">
          <button className="pr-3">1</button>
          <button className="border-l text-slate-400 px-3">2</button>
          <button className="text-slate-400 border-l border-r px-3">3</button>
          <p className=" border-r px-3 text-slate-400">-</p>
          <button className="text-slate-400 pl-3"> 8</button>
        </div>
        <button className="border-l pl-1" type="button">
          {" "}
          <FaChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default VarietyOfStaysCard;

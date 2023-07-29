import "./businessLandingPage.css";
import travelBlogImg from "../../assets/image/businessLanding/travel-video-blg.png";
import planImg from "../../assets/image/businessLanding/planImg.png";
import saveTime from "../../assets/image/businessLanding/icons/saveTime.svg";

const BusinessLandingPage = () => {
  return (
    <div>
      <div className="hero-image h-[80vh]">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-[64px] font-extrabold w-[500px] text-center text-white">
            Business travel. Made simple.
          </h1>
          <p className="w-[766px] text-white text-center">
            we wanted a better way to plan and manage our own business travel.
            But we found tools with limitesd inventory, outdated interfaces,
            hidden costs and fees that seemed unreasonable. We just wanted
            something like Plist – easy and free – so we built it.
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              className="w-[433px] focus:outline-none border h-11 py-[10px] px-[14px] rounded-lg"
            />
            <button className="w-24 h-11 bg-[#1C2636] text-white rounded-lg">
              Sign Us
            </button>
          </div>
          <p className="text-white">
            <span className="text-[#FFB057]">Already</span> Using plist
            Business? <span className="text-[#FFB057]">Sign In</span>
          </p>
        </div>
      </div>
      {/* video section */}
      <div className="w-[1170px] mx-auto my-[100px]">
        <img className="w-full" src={travelBlogImg} alt="" />
      </div>
      {/* 3 card section */}
      <div className="w-[1170px] mx-auto flex gap-[30px] mb-[100px]">
        <div className="p-6 flex flex-col gap-[10px] old-logo-color w-[370px] rounded-2xl text-white pop-font">
          <img src={saveTime} alt="" className="w-[69px] h-[69px]" />
          <h3 className="text-2xl font-semibold mt-[10px]">Save time</h3>
          <p>
            We search 2,500+ travel providers, so you don’t have to. Find
            flights and hotels from across the internet to plan the trip that’s
            best for you.
          </p>
        </div>
        <div className="p-6 flex flex-col gap-[10px] old-logo-color w-[370px] rounded-2xl text-white pop-font">
          <img src={saveTime} alt="" className="w-[69px] h-[69px]" />
          <h3 className="text-2xl font-semibold mt-[10px]">Save time</h3>
          <p>
            We search 2,500+ travel providers, so you don’t have to. Find
            flights and hotels from across the internet to plan the trip that’s
            best for you.
          </p>
        </div>
        <div className="p-6 flex flex-col gap-[10px] old-logo-color w-[370px] rounded-2xl text-white pop-font">
          <img src={saveTime} alt="" className="w-[69px] h-[69px]" />
          <h3 className="text-2xl font-semibold mt-[10px]">Save time</h3>
          <p>
            We search 2,500+ travel providers, so you don’t have to. Find
            flights and hotels from across the internet to plan the trip that’s
            best for you.
          </p>
        </div>
      </div>
      
      {/* plist business */}
      <div className="w-[1170px] mx-auto flex flex-col gap-5 items-center">
        {/* title */}
        <p className="font-bold text-5xl dmsan-font old-logo-color-text">
          What can you do with Plist for Business?
        </p>
        {/* 1st card */}
        <div className="pop-font text-white flex gap-14">
          <div className="w-[502px]">
            <img src={planImg} alt="" className="h-[198px]" />
            <div className="old-logo-color w-[488px] p-[35px] flex flex-col gap-5 rounded-b-2xl">
              <h6 className="text-2xl">Plan</h6>
              <hr className="border-dashed" />
              <p>
                Search hundreds of travel sites to find great deals and plan
                travel your way. Your travel policy (if you have one) is part of
                the search so it’s easy to follow, and if you need approval,
                it’s only a click away
              </p>
            </div>
          </div>
          <div className="w-[502px]">
            <img src={planImg} alt="" className="h-[198px]" />
            <div className="old-logo-color w-[488px] p-[35px] flex flex-col gap-5 rounded-b-2xl">
              <h6 className="text-2xl">Plan</h6>
              <hr className="border-dashed" />
              <p>
                Search hundreds of travel sites to find great deals and plan
                travel your way. Your travel policy (if you have one) is part of
                the search so it’s easy to follow, and if you need approval,
                it’s only a click away
              </p>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="pop-font text-white flex gap-14">
          <div className="w-[502px]">
            <img src={planImg} alt="" className="h-[198px]" />
            <div className="old-logo-color w-[488px] p-[35px] flex flex-col gap-5 rounded-b-2xl">
              <h6 className="text-2xl">Plan</h6>
              <hr className="border-dashed" />
              <p>
                Search hundreds of travel sites to find great deals and plan
                travel your way. Your travel policy (if you have one) is part of
                the search so it’s easy to follow, and if you need approval,
                it’s only a click away
              </p>
            </div>
          </div>
          <div className="w-[502px]">
            <img src={planImg} alt="" className="h-[198px]" />
            <div className="old-logo-color w-[488px] p-[35px] flex flex-col gap-5 rounded-b-2xl">
              <h6 className="text-2xl">Plan</h6>
              <hr className="border-dashed" />
              <p>
                Search hundreds of travel sites to find great deals and plan
                travel your way. Your travel policy (if you have one) is part of
                the search so it’s easy to follow, and if you need approval,
                it’s only a click away
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default BusinessLandingPage;

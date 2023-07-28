import React from "react";

import worldTourImg from "../../../assets/image/home/worldTour.png";


const RegistrationModal = ({ setIsRegistrationModalOpen }) => {
  return (
    <>
      <div
        className="fixed inset-0 h-screen w-screen bg-black/50 z-[51]"
        onClick={() => setIsRegistrationModalOpen(false)}
      ></div>
      <div className="fixed  rounded-lg bg-white  z-[51] left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">
        <div className="flex w-[1184px]">
          <div>
            <img className="w-full h-full" src={worldTourImg} alt="" />
          </div>
          <div className=" w-[639px] px-11 py-16 flex flex-col items-center gap-5 ">
            <div className="flex gap-5 justify-center">
              <button className="py-2 px-8 rounded old-logo-color text-sm text-white font-bold dmsan-font">
                Customer Sign Up
              </button>
              <div className="old-logo-color rounded p-1 flex items-center justify-center">
                <div className="bg-white">
                  <button className="bg-white py-2 px-12 font-bold dmsan-font grad-text-olc">
                    Agent Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-7 gap-y-5 pop-font text-sm">
              <div className="flex flex-col gap-2.5 ">
                <label className="text7F8FA4" htmlFor="">
                  First Name
                </label>
                <input
                  className="text-base placeholder-[#334150] py-1.5 px-3.5 gray-border"
                  placeholder="Mashod"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2.5 ">
                <label className="text7F8FA4" htmlFor="">
                Last Name
                </label>
                <input
                  className="text-base placeholder-[#334150] py-1.5 px-3.5 gray-border"
                  placeholder="Rana"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2.5 ">
                <label className="text7F8FA4" htmlFor="">
                Email
                </label>
                <input
                  className="text-base placeholder-[#334150] py-1.5 px-3.5 gray-border"
                  placeholder="yourmail@mail.com"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2.5 ">
                <label className="text7F8FA4" htmlFor="">
                Phone Number
                </label>
                <input
                  className="text-base placeholder-[#334150] py-1.5 px-3.5 gray-border"
                  placeholder="Mashod Rana"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2.5 col-span-2">
                <label className="text7F8FA4" htmlFor="">
                Address
                </label>
                <textarea
                  className="text-base placeholder-[#334150] py-1.5 px-3.5 gray-border"
                  placeholder="Your Full Address"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2.5 ">
                <label className="text7F8FA4" htmlFor="">
                Password
                </label>
                <input
                  className="text-base placeholder-[#334150] py-1.5 px-3.5 gray-border"
                  placeholder="******#"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-2.5 ">
                <label className="text7F8FA4" htmlFor="">
                Confirm Password
                </label>
                <input
                  className="text-base placeholder-[#334150] py-1.5 px-3.5 gray-border"
                  placeholder="******#"
                  type="password"
                />
              </div>
              
            </div>
            <div>
              <button className="py-2 px-32 rounded old-logo-color text-sm text-white font-bold dmsan-font">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationModal;

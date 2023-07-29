import React, { useState } from "react";

import worldTourImg from "../../../assets/image/home/worldTour.png";
import RadioButton from "../../shared/buttons/RadioButton";
import usaIcon from "../../../assets/image/globalIcons/country/USA.svg";
import "./RegistrationModal.css";
import Select from "react-dropdown-select";

const RegistrationModal = ({ setIsRegistrationModalOpen }) => {
  const [isAgree, setIsAgree] = useState(false);

  const options = [
    {
      value: 88,
      label: <img className="w-[16px] h-[11px]" src={usaIcon} />,
    },
    {
      value: 88,
      label: <img className="w-[16px] h-[11px]" src={usaIcon} />,
    },
    {
      value: 88,
      label: <img className="w-[16px] h-[11px]" src={usaIcon} />,
    },
  ];
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
                <div className="flex gap-2 gray-border">
                  <div className=" border-e w-[64px] px-2">
                    <Select
                      style={{
                        border: "none",
                        padding: "0",
                        margin: "0",
                        gap: "8px",
                      }}
                      options={options}
                    />
                  </div>
                  <input
                    className="text-base placeholder-[#334150] w-[150px]"
                    placeholder="9638-945755"
                    type="tel"
                  />
                </div>
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
              <div className="flex col-span-2 gap-2 items-center ">
                <RadioButton value={isAgree} setIsAgree={setIsAgree} />
                <label className="text7F8FA4 text-sm " htmlFor="">
                  I agree to the <span className="text-[#249AF3]">Terms</span>,{" "}
                  <span className="text-[#249AF3]">Privacy</span>{" "}
                  <span className="text-[#249AF3]">Policy</span> and{" "}
                  <span className="text-[#249AF3]">Fees</span>
                </label>
              </div>
            </div>
            <div className="mt-2.5">
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

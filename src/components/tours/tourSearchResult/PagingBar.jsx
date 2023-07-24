import React from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";


const PagingBar = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[36px] h-[36px] border-e-2 text-[#7F8FA4] flex justify-center items-center">
          <SlArrowLeft size={16} />
        </div>
        <div className="w-[36px] h-[24px]  text-black text-base flex justify-center items-center">
          1
        </div>
        <div className="w-[36px] h-[24px] border-s-2 text-[#7F8FA4] text-base flex justify-center items-center">
          2
        </div>
        <div className="w-[36px] h-[24px] border-s-2 text-[#7F8FA4] text-base flex justify-center items-center">
          3
        </div>
        <div className="w-[36px] h-[24px] border-s-2 text-[#7F8FA4] text-base flex justify-center items-center">
          -
        </div>
        <div className="w-[36px] h-[24px] border-s-2 text-[#7F8FA4] text-base flex justify-center items-center">
          8
        </div>
        <div className="w-[36px] h-[36px] border-s-2 text-black flex justify-center items-center">
          <SlArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default PagingBar;

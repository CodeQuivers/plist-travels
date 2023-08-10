import React, { useState } from "react";

import RadioButttonIconBlue from "../../../assets/image/tours/icons/RadioButttonIconBlue.svg";
import RadioButttonIconGray from "../../../assets/image/tours/icons/RadioButttonIconGray.svg";


const FilterRadioButton = ({text}) => {
    const [toggle, setToggle] = useState(false);
    const iconImg = toggle?RadioButttonIconBlue:RadioButttonIconGray;

  return (
    <div class="flex felx-wrap items-center mb-1">
      <button
      className="w-[16px] h-[16px]"
      onClick={()=>setToggle(!toggle)}
      >
        <img src={iconImg} className="w-[16px] h-[16px]" alt="" />
      </button>
      <label class="ml-2 text-sm text-[#334150]">
        {text}
      </label>
    </div>
  );
};

export default FilterRadioButton;

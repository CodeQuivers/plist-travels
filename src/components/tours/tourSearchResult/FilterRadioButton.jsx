import React, { useState } from "react";

import RadioButttonIconBlue from "../../../assets/image/tours/icons/RadioButttonIconBlue.svg";
import RadioButttonIconGray from "../../../assets/image/tours/icons/RadioButttonIconGray.svg";
import { useDispatch } from "react-redux";

const FilterRadioButton = ({ text, code, setIsSelected }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const iconImg = toggle ? RadioButttonIconBlue : RadioButttonIconGray;
  const handleOnClick = () => {
    setToggle(!toggle);
    dispatch(
      setIsSelected({
        key: code,
        isSelected: !toggle,
      })
    );
  };

  return (
    <div className="flex felx-wrap items-center mb-1">
      <button className="w-[16px] h-[16px]" onClick={handleOnClick}>
        <img src={iconImg} className="w-[16px] h-[16px]" alt="" />
      </button>
      <label className="ml-2 text-sm text-[#334150]">{text}</label>
    </div>
  );
};

export default FilterRadioButton;

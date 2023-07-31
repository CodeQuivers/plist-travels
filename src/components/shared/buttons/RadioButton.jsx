import React from "react";

import RadioButttonIconBlue from "../../../assets/image/globalIcons/RadioButttonIconBlue.svg";
import RadioButttonIconGray from "../../../assets/image/globalIcons/RadioButttonIconGray.svg";

const RadioButton = ({ value, setIsAgree}) => {
//   const { value, setIsAgree } = props || {};
  const iconImg = value ? RadioButttonIconBlue : RadioButttonIconGray;
  const content = <img src={iconImg} className="w-[16px] h-[16px]" alt="" />;
  return (
    <button
      onClick={() => setIsAgree(!value)}
      className="w-[16px] h-[16px]"
    >
      {content}
    </button>
  );
};

export default RadioButton;

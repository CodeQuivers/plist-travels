import React from "react";

const CardWhyUs = ({cardInfo}) => {
    const {icon, title, description, linkText, link} = cardInfo || {};
  return (
 
      <div class="h-full w-[250px] p-6 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden whyUsCard">
        <img src={icon} className="w-[69px] h-[69px]" alt="" />
        <h1 className=" text-2xl font-semibold mb-2.5">{title}</h1>
        <p class="text-center mb-5 font-normal text-base ">
          {description}
        </p>
        <a class=" text-lg font-medium text-center border-0">
          {linkText}
        </a>
      </div>
  );
};

export default CardWhyUs;

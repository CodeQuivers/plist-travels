import React from "react";

import "./AgentCover.css";
import parabolaShapeImg from "../../../assets/image/home/parabolaShape.svg";
// import parabolaShapeImg from "../../../assets/image/home/half2.png";

const AgentCover = () => {
  return (
    <div className="w-full h-[470px] agent-bg">
      <div className="h-full agent-child-bg flex flex-col gap-[30px]">
        <div className="w-full h-[340px] flex flex-col justify-center items-center">
          <h2 className="max-w-[1086px] w-3/4 text-3xl font-bold pop-font text-white text-center">
            We partner with travel agents across the globe, bringing new 
            realms
            of luxury travel options to your clients.
          </h2>
          <div>
            <button>Become An Agent</button>
          </div>
        </div>
        <div className=" h-[100px] rana mb-0">
          <img className="w-[2221px] overflow-hidden" src={parabolaShapeImg} alt="" />
          <div className="h-[20px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default AgentCover;

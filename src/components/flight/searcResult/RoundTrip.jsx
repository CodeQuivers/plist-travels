import React from "react";
import ChainaSouthern from "../../../assets/image/flight/images/ChainaSouthern.png";
import moveRight from "../../../assets/image/flight/icons/move-right.svg";

const RoundTrip = ({ price, oneWayFlilght, returnFlight }) => {
  return (
    <div className="mb-8 p-5 old-logo-color-border flex gap-10">
      {/* Airlines  */}
      <div className="flex flex-col justify-around ">
        <div>
          <img src={ChainaSouthern} alt="ChainaSouthern" />
          <p>{oneWayFlilght?.airline_name}</p>
        </div>
        <div>
          <img src={ChainaSouthern} alt="ChainaSouthern" />
          <p>{returnFlight?.airline_name}</p>
        </div>
      </div>
      {/* Date, Time and Duration */}
      <div className="w-4/6 flex flex-col gap-5">
        <div className="flex gap-10 justify-around">
          <div className="flex flex-col gap-2">
            <span className="text-xs">Depart</span>
            <span className="text-sm">{oneWayFlilght?.departTime}</span>
            <span className="text-xs">{oneWayFlilght?.departDate}</span>
            <span className="text-sm">{oneWayFlilght?.cityFrom}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-center">
              <span className="text-xs">{oneWayFlilght?.duration}</span>
              <img src={moveRight} alt="" />
            </p>
            <span className="text-xs text-center">1 Stop via Guangzhou</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs">Arrive</span>
            <span className="text-sm">{oneWayFlilght?.arrivelTime}</span>
            <span className="text-xs">{oneWayFlilght?.arrivelDate}</span>
            <span className="text-sm">{oneWayFlilght?.cityTo}</span>
          </div>
        </div>
        <hr />
        <div className="flex gap-10 justify-around">
          <div className="flex flex-col gap-2">
            <span className="text-xs">Depart</span>
            <span className="text-sm">{returnFlight?.departTime}</span>
            <span className="text-xs">{returnFlight?.departDate}</span>
            <span className="text-sm">{returnFlight?.cityFrom}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-center">
              <span className="text-xs">{returnFlight?.duration}</span>
              <img src={moveRight} alt="" />
            </p>
            <span className="text-xs text-center">1 Stop via Guangzhou</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs">Depart</span>
            <span className="text-sm">{returnFlight?.arrivelTime}</span>
            <span className="text-xs">{returnFlight?.arrivelDate}</span>
            <span className="text-sm">{returnFlight?.cityTo}</span>
          </div>
        </div>
      </div>
      {/* price and button */}
      <div className="w-1/6 flex flex-col justify-center gap-11">
        <div>
          <span className="text-sm">Price</span>
          <p className="text-base font-medium">USD {price}</p>
        </div>
        <div className="">
          <button className="text-white font-medium py-3.5 px-2 rounded old-logo-color">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoundTrip;

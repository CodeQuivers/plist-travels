import React from 'react'

import ChainaSouthern from "../../../assets/image/flight/images/ChainaSouthern.png";
import moveRight from "../../../assets/image/flight/icons/move-right.svg";


const OneWayTrip = ({price, oneWayFlilght}) => {
  return (
    <div className="mb-8 pl-5 py-5 old-logo-color-border">
      {/* item one */}
      <div className="pl-5 py-5 flex justify-between">
        <div className="flex gap-[84px]">
          <div>
            <img src={ChainaSouthern} alt="ChainaSouthern" />
            <p>{oneWayFlilght?.airline_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-xs">Depart</span>
            <span className="text-sm">{oneWayFlilght?.departTime}</span>
            <span className="text-xs">{oneWayFlilght?.departDate}</span>
            <span className="text-sm">{oneWayFlilght?.cityFrom}</span>
          </div>
          <div>
            <span className="text-xs">{oneWayFlilght?.duration}</span>
            <img src={moveRight} alt="" />
            <span className="text-xs">1 Stop via Guangzhou</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs">Arrive</span>
            <span className="text-sm">{oneWayFlilght?.arrivelTime}</span>
            <span className="text-xs">{oneWayFlilght?.arrivelDate}</span>
            <span className="text-sm">{oneWayFlilght?.cityTo}</span>
          </div>
        </div>
        <div className="pr-5">
          <span className="text-sm">Price</span>
          <p className="text-base">USD {price}</p>
        </div>
      </div>
      {/* item two */}
      <div className="pl-5 py-5 flex justify-between">
        <div className="pr-5">
          <button className="text-white py-4 px-3 rounded old-logo-color">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default OneWayTrip
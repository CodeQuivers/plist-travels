import React from "react";

import ChainaSouthern from "../../../assets/image/flight/images/ChainaSouthern.png";
import moveRight from "../../../assets/image/flight/icons/move-right.svg";

const OneWayTrip = ({
  flightId,
  price,
  oneWayFlilght,
  stopage,
  flyDuration,
  oneWayFlightVia,
}) => {
  const { airline_name, departDate, departTime, cityFrom } =
    oneWayFlilght[0] || {};
  const { arrivelTime, arrivelDate, cityTo } =
    oneWayFlilght[oneWayFlilght.length - 1] || {};
  return (
    <div className="mb-8 p-5 grad-border-olc">
      {/* item one */}

      <div className="flex gap-14">
        <div className="w-4/6 flex gap-14">
          <div className="felx flex-col items-center justify-center">
            <img src={ChainaSouthern} alt="ChainaSouthern" />
            <p className="text-xs text7F8FA4">{airline_name}</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <span className="text-xs text-[#66768E]">Depart</span>
            <span className="text-sm">{departTime}</span>
            <span className="text-xs">{departDate}</span>
            <span className="text-sm">{cityFrom}</span>
          </div>
          <div className="w-1/5 flex flex-col gap-3">
            <p>
              <span className="text-xs text-[#66768E]">{flyDuration}</span>
              <img src={moveRight} alt="" />
            </p>
            <span className="text-xs">
              {" "}
              {stopage} Stopage {oneWayFlightVia && `via ${oneWayFlightVia}`}
            </span>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <span className="text-xs text-[#66768E]">Arrive</span>
            <span className="text-sm">{arrivelTime}</span>
            <span className="text-xs">{arrivelDate}</span>
            <span className="text-sm">{cityTo}</span>
          </div>
        </div>
        <div className="w-1/3 flex gap-10 items-center">
          <div>
            <span className="text-sm text-[#66768E]">Price</span>
            <p className="text-base font-medium">USD {price}</p>
          </div>
          <div className="flex justify-center">
            <Link to={`/flight/cashout/${flightId}`}>
              <span className="text-white font-medium py-3.5 px-2 rounded old-logo-color">
                Book Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneWayTrip;

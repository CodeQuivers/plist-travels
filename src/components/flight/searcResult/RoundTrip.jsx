import React from "react";
import ChainaSouthern from "../../../assets/image/flight/images/ChainaSouthern.png";
import moveRight from "../../../assets/image/flight/icons/move-right.svg";
import { Link } from "react-router-dom";

const RoundTrip = ({
  flightId,
  price,
  oneWayFlilght,
  returnFlight,
  stopage,
  returnStopage,
  flyDuration,
  returnTotalDuration,
  oneWayFlightVia,
  returnFlightVia,
}) => {
  const { airline_name, departDate, departTime, cityFrom } =
    oneWayFlilght[0] || {};
  const { arrivelTime, arrivelDate, cityTo } =
    oneWayFlilght[oneWayFlilght.length - 1] || {};

  const {
    airline_name: returnAirlineName,
    departDate: returnDepartDate,
    departTime: returnDepartTime,
    cityFrom: returnCityFrom,
  } = returnFlight[0] || {};
  const {
    arrivelTime: returnArrivelTime,
    arrivelDate: returnArrivelDate,
    cityTo: returnCityTo,
  } = returnFlight[returnFlight.length - 1] || {};
  return (
    <div className="mb-8 p-5 old-logo-color-border flex gap-10">
      {/* Airlines  */}
      <div className="flex flex-col justify-around ">
        <div>
          <img src={ChainaSouthern} alt="ChainaSouthern" />
          <p>{airline_name}</p>
        </div>
        <div>
          <img src={ChainaSouthern} alt="ChainaSouthern" />
          <p>{returnAirlineName}</p>
        </div>
      </div>
      {/* Date, Time and Duration */}
      <div className="w-4/6 flex flex-col gap-5">
        <div className="flex gap-10 justify-around">
          <div className="flex flex-col gap-2">
            <span className="text-xs">Depart</span>
            <span className="text-sm">{departTime}</span>
            <span className="text-xs">{departDate}</span>
            <span className="text-sm">{cityFrom}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-center">
              <span className="text-xs">{flyDuration}</span>
              <img src={moveRight} alt="" />
            </p>
            <span className="text-xs text-center">
              {stopage} Stopage {oneWayFlightVia && `via ${oneWayFlightVia}`}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs">Arrive</span>
            <span className="text-sm">{arrivelTime}</span>
            <span className="text-xs">{arrivelDate}</span>
            <span className="text-sm">{cityTo}</span>
          </div>
        </div>
        <hr />
        <div className="flex gap-10 justify-around">
          <div className="flex flex-col gap-2">
            <span className="text-xs">Depart</span>
            <span className="text-sm">{returnDepartTime}</span>
            <span className="text-xs">{returnDepartDate}</span>
            <span className="text-sm">{returnCityFrom}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-center">
              <span className="text-xs">{returnTotalDuration}</span>
              <img src={moveRight} alt="" />
            </p>
            <span className="text-xs text-center">
              {returnStopage} Stopage{" "}
              {returnFlightVia && `via ${returnFlightVia}`}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs">Depart</span>
            <span className="text-sm">{returnArrivelTime}</span>
            <span className="text-xs">{returnArrivelDate}</span>
            <span className="text-sm">{returnCityTo}</span>
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
          <Link to={`/flight/cashout/${flightId}`}>
            <span className="text-white font-medium py-3.5 px-2 rounded old-logo-color">
              Book Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoundTrip;

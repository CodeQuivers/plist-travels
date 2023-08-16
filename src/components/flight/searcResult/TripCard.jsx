import React from "react";

import ChainaSouthern from "../../../assets/image/flight/images/ChainaSouthern.png";
import moveRight from "../../../assets/image/flight/icons/move-right.svg";
import RoundTrip from "./RoundTrip";
import OneWayTrip from "./OneWayTrip";

const TripCard = ({ tripInfo }) => {
  const {
    isReturn,
    price,
    max_stops,
    return_max_stops,
    fly_duration,
    return_total_duration,
    id,
  } = tripInfo || {};
  const oneWayFlilght = tripInfo?.onewayFlights;
  const returnFlight = tripInfo?.returnFlights;
  let oneWayFlightVia = "";
  if (max_stops > 0) {
    // oneWayFlightVia=tripInfo.onewayFlights.slice(1, -1).pluck('cityTo').join(', ')
    oneWayFlightVia = tripInfo.onewayFlights
      .slice(0, -1)
      .map((item) => item.cityTo)
      .join(", ");
  }
  let returnFlightVia = "";
  if (return_max_stops > 0) {
    returnFlightVia = tripInfo.returnFlights
      .slice(0, -1)
      .map((item) => item.cityTo)
      .join(", ");
  }
  let content = null;
  if (isReturn === "Yes") {
    content = (
      <RoundTrip
        flightId={id}
        price={price}
        oneWayFlilght={oneWayFlilght}
        returnFlight={returnFlight}
        stopage={max_stops}
        returnStopage={return_max_stops}
        flyDuration={fly_duration}
        returnTotalDuration={return_total_duration}
        oneWayFlightVia={oneWayFlightVia}
        returnFlightVia={returnFlightVia}
      />
    );
  }
  if (isReturn === "No") {
    content = (
      <OneWayTrip
        flightId={id}
        price={price}
        oneWayFlilght={oneWayFlilght}
        stopage={max_stops}
        flyDuration={fly_duration}
        oneWayFlightVia={oneWayFlightVia}
      />
    );
  }

  return <>{content}</>;
};

export default TripCard;

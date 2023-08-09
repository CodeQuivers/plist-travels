import React from "react";

import ChainaSouthern from "../../../assets/image/flight/images/ChainaSouthern.png";
import moveRight from "../../../assets/image/flight/icons/move-right.svg";
import RoundTrip from "./RoundTrip";
import OneWayTrip from "./OneWayTrip";

const TripCard = ({ tripInfo }) => {
  const { isReturn, price } = tripInfo || {};
  const oneWayFlilght = tripInfo?.onewayFlights[0];
  const returnFlight = tripInfo?.returnFlights[0];
let content = null;
  if (isReturn === "Yes") {
    content = (
      <RoundTrip
        price={price}
        oneWayFlilght={oneWayFlilght}
        returnFlight={returnFlight}
      />
    );
  }
  if (isReturn === "No") {
    content = <OneWayTrip price={price} oneWayFlilght={oneWayFlilght} />;
  }

  return <>{content}</>;
};

export default TripCard;

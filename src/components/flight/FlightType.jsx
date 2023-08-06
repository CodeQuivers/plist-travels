import React, { useState } from "react";

const FlightType = ({ setFlightType }) => {
  const ONE = "one-way";
  const ROUND = "round";
  const DIRECT = "direct-flight";
  const [isSelected, setIsSelected] = useState("");
  const one = isSelected === ONE ? true : false;
  const round = isSelected === ROUND ? true : false;
  const direct = isSelected === DIRECT ? true : false;
  const handleFlightTypeSelection = (flightType) => {
    setIsSelected(flightType);
    setFlightType(flightType);
  };
  return (
    <div className="inline-flex items-start gap-7 text-sm">
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="one-way"
          id="one-way"
          checked={one}
          onChange={() => handleFlightTypeSelection(ONE)}
        />
        <p>One way</p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="round-trip"
          id="round-trip"
          checked={round}
          onChange={() => handleFlightTypeSelection(ROUND)}
        />
        <p>Round-Trip</p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="direct-flight"
          id="direct-flight"
          checked={direct}
          onChange={() => handleFlightTypeSelection(DIRECT)}
        />
        <p>Direct Flight</p>
      </div>
    </div>
  );
};

export default FlightType;

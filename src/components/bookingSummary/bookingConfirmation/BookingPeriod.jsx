import React from "react";

import longArrowRightIcon from "../../../assets/image/bookSummary/longArrowRight.svg";

const BookingPeriod = ({ reservationPeriod }) => {
  const checkIn = reservationPeriod?.length > 0 ? reservationPeriod[0] : {};
  const checkOut = reservationPeriod?.length > 0 ? reservationPeriod[1] : {};
  return (
    <div className="w-11/12 flex justify-between">
      <div>
        <p className="text7F8FA4 text-sm">{checkIn?.label}</p>
        <p className="text334150 text-base">{checkIn?.value}</p>
      </div>
      <div className="flex items-center">
        <p>
          <img src={longArrowRightIcon} alt="" />
        </p>
      </div>
      <div>
        <p className="text7F8FA4 text-sm">{checkOut.label}</p>
        <p className="text334150 text-base">{checkOut.value}</p>
      </div>
    </div>
  );
};

export default BookingPeriod;

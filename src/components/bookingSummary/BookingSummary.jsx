import React from "react";
import TravelerInformation from "./TravelerInformation";
import BookingConfirmation from "./bookingConfirmation/BookingConfirmation";
import "./booking-summary.css";

const BookingSummary = ({ travelerInfo, bookingConfirmationiInfo }) => {
  // const { itemInfo, reservationPeriod, paymentInfo, otherInfo } =
  //   bookingConfirmationiInfo;
  return (
    <div className="max-w-[1170px] mx-auto booking-now">
      <div className="flex justify-between gap-7">
        <div className="w-7/12">
          <TravelerInformation />
        </div>
        <div className="w-2/5">
          <BookingConfirmation {...bookingConfirmationiInfo}/>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;

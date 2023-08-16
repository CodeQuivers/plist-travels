import React from "react";
import TravelerInformation from "./TravelerInformation";
import BookingConfirmation from "./bookingConfirmation/BookingConfirmation";
import "./booking-summary.css";
import { useForm, Controller } from "react-hook-form";

const BookingSummary = ({ travelerInfo, bookingConfirmationiInfo }) => {
  const { register, handleSubmit, control } = useForm();
  // const { itemInfo, reservationPeriod, paymentInfo, otherInfo } =
  //   bookingConfirmationiInfo;
  const handleOnSubmit = (data) => {
    console.log("6666666666666666666666666666666");
    console.log(data);
  };
  return (
    <div className="max-w-[1170px] mx-auto booking-now">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex justify-between gap-7">
          <div className="w-7/12">
            <TravelerInformation
              register={register}
              Controller={Controller}
              control={control}
            />
          </div>
          <div className="w-2/5">
            <BookingConfirmation {...bookingConfirmationiInfo} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingSummary;

import React from "react";
import TravelerInformation from "./TravelerInformation";
import BookingConfirmation from "./bookingConfirmation/BookingConfirmation";
import "./booking-summary.css";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const BookingSummary = ({ travelerInfo, bookingConfirmationiInfo }) => {
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState || {};
  const { fields, append } = useFieldArray({ name: "person", control });
  // const { itemInfo, reservationPeriod, paymentInfo, otherInfo } =
  //   bookingConfirmationiInfo;
  const handleOnSubmit = (data) => {
    console.log("6666666666666666666666666666666");
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="max-w-[1170px] mx-auto booking-now">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex justify-between gap-7">
          <div className="w-7/12">
            <TravelerInformation
              travelerInfo={travelerInfo}
              register={register}
              Controller={Controller}
              control={control}
              errors={errors}
              fields={fields}
              append={append}
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

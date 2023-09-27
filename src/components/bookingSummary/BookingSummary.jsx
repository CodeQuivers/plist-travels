import React, { useState } from "react";
import TravelerInformation from "./TravelerInformation";
import BookingConfirmation from "./bookingConfirmation/BookingConfirmation";
import "./booking-summary.css";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useGetPaymentPageMutation } from "../../redux/features/flight/flightApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";


const BookingSummary = ({
  travelerInfo,
  bookingConfirmationiInfo,
  flightData,
}) => {
  const [bookingData, setBookingData] = useState({});
  const [getPaymentPage, { data: paymentData, isLoading, isError }] =
    useGetPaymentPageMutation();
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState || {};
  // const { fields, append } = useFieldArray({ name: "person", control });
  // const { itemInfo, reservationPeriod, paymentInfo, otherInfo } =
  //   bookingConfirmationiInfo;
  const createDataToPost = (formData) => {
    const OfferId = flightData.OfferId;
    const id = flightData.id.toString();
    const passenger = {
      adult: {
        title: formData.adult.map((item) => item.title),
        first_name: formData.adult.map((item) => item.first_name),
        last_name: formData.adult.map((item) => item.last_name),
        gender: formData.adult.map((item) => item.gender),
        dob: formData.adult.map((item) => item.dob),
        id: formData.adult.map((item) => item.id),
      },
      child: {
        title: formData.children.map((item) => item.title),
        first_name: formData.children.map((item) => item.first_name),
        last_name: formData.children.map((item) => item.last_name),
        gender: formData.children.map((item) => item.gender),
        dob: formData.children.map((item) => item.dob),
        id: formData.children.map((item) => item.id),
      },
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: "Dhaka",
      country: formData.country,
    };
    const payment_type = formData.payment_type.toLowerCase();
    const redirect_url = import.meta.env.VITE_APP_FLIGHT_CONFIRM_REDIRECT_URL;
    setBookingData({
      OfferId,
      id,
      passenger,
      payment_type,
      redirect_url,
    });
    getPaymentPage({
      OfferId,
      id,
      passenger,
      payment_type,
      redirect_url,
    });
  };
  const handleOnSubmit = (formData) => {
    // console.log("6666666666666666666666666666666");
    // console.log(formData);
    createDataToPost(formData);
  };
  console.log(bookingData);
  let content = null;
  if (!isError && paymentData) {
    // content = paymentData;
    console.log("printing .........")
    console.log(paymentData)
    const redirectUrl = paymentData.redirect_page;
    window.location.href = redirectUrl
  } else {
    content = (
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex justify-between gap-7">
          <div className="w-7/12">
            <TravelerInformation
              travelerInfo={travelerInfo}
              register={register}
              Controller={Controller}
              control={control}
              errors={errors}
              // fields={fields}
              // append={append}
            />
          </div>

          <div className="w-2/5">
            <BookingConfirmation {...bookingConfirmationiInfo} />
          </div>
        </div>
      </form>
    );
  }

  return <div className="max-w-[1170px] mx-auto booking-now">{content}</div>;
};

export default BookingSummary;

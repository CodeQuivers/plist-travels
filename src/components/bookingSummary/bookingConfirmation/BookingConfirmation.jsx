import React from "react";

// import bookedItemImg from "../../assets/image/bookSummary/bookedItem.png"
import securityIcon from "../../../assets/image/bookSummary/securityIcon.svg";
import BookedItemCoverPhoto from "./BookedItemCoverPhoto";
import BookedItemHeading from "./BookedItemHeading";
import GrayDivider from "./GrayDivider";
import BookingPeriod from "./BookingPeriod";
import BookingPaymentInfo from "./BookingPaymentInfo";
import OtherBookingInfo from "./OtherBookingInfo";


const BookingConfirmation = ({
  itemCoverPhoto,
  itemInfo,
  reservationPeriod,
  paymentInfo,
  otherInfo,
}) => {
  // To use this component you have to provide the props
  /***
   * itemCoverPhoto: an image source.
   * temInfo: object {title:'string', subTitle:'string'}
   * reservationPeriod: object {checkIn:'date in string', checkOut:'date'}
   * paymentInfo: an object contains {total:250, other: a list of object conains the description of cost with label and value}
   *                      {total:250, [{'label':'Base Fare', value:200}, {label:'Service Charge', value:50}]}
   * other: an list of object with {label:'string', value:''}
   *
   *
   * ***/
  return (
    <div className="gard-border-olc flex flex-col gap-10 items-center pb-8">
      <BookedItemCoverPhoto imgSource={itemCoverPhoto} />
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        {/* Tour place */}
        <BookedItemHeading
          {...itemInfo}
        />
        <GrayDivider />

        {/* Reservation Period */}
        <BookingPeriod {...reservationPeriod} />

        <GrayDivider />

        {/* Booking Info */}
        <OtherBookingInfo other={otherInfo}/>
        <GrayDivider />
        {/* Payment Amount Info */}
        <BookingPaymentInfo {...paymentInfo}/>
      </div>
      <div className="w-11/12 flex flex-col gap-5">
        <div className="w-full">
          <button className="w-full py-4 rounded-md text-bold text-white old-logo-color">
            Book Now
          </button>
        </div>
        <div className="flex justify-center gap-2">
          <img src={securityIcon} className="w-[16px] h-[16x]" alt="" />
          <p>Secure Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;

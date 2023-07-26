/* eslint-disable react/prop-types */

import HotelBookingConfirmation from "../../components/hotel/hotelBooking/HotelBookingConfirmation";
import HotelBookingTravelerInformation from "../../components/hotel/hotelBooking/HotelBookingTravelerInformation";

const HotelBookingSummary = () => {
  return (
    <div className="max-w-[1170px] mt-20 mx-auto booking-now">
      <div className="flex justify-between gap-7">
        <div className="w-7/12">
          <HotelBookingTravelerInformation />
        </div>
        <div className="w-2/5">
          <HotelBookingConfirmation />
        </div>
      </div>
    </div>
  );
};

export default HotelBookingSummary;

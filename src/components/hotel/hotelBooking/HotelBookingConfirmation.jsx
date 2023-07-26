import bookingCoverPhoto from "../../../assets/image/hotel/hotelBooking/hotelBooking1.png";
import bookingArrow from "../../../assets/image/hotel/hotelBooking/Long-arrow-right.png";
import secureIcon from "../../../assets/image/hotel/hotelBooking/Security.svg";

const HotelBookingConfirmation = () => {
  return (
    <div
      style={{
        fontFamily: "Poppins",
      }}
      className=" border-gradientBox flex flex-col items-center !px-0 !pt-0 !pb-8"
    >
      <div>
        <img src={bookingCoverPhoto} alt="" />
      </div>
      <div className="mt-8">
        <h2 className="font-medium text-2xl gradientText">
          Oyo 12123 Hotel Sun City
        </h2>
        <p className="text-[#7F8FA4] mt-2">
          Plot No. 11A-34, W.E.A, Channa Market, Karol Bagh, 11A-34
        </p>
      </div>
      <div className="flex justify-between px-3 items-center w-full border-t mt-5 py-5">
        <div>
          <p className="text-[#7F8FA4] text-sm">Check In</p>
          <h3>04/07/2023</h3>
        </div>
        <div>
          <img src={bookingArrow} alt="" />
        </div>
        <div>
          <p className="text-[#7F8FA4] text-sm">Check Out</p>
          <h3>04/07/2023</h3>
        </div>
      </div>
      <div className="border-t space-y-3 py-5 w-full">
        <div className="flex items-center justify-between px-3">
          <h4 className="text-[#7F8FA4] text-sm">Brand Name</h4>
          <h4 className="text-[#334150]">Room Only</h4>
        </div>

        <div className="flex items-center justify-between px-3">
          <h4 className="text-[#7F8FA4] text-sm">Payment Type</h4>
          <h4 className="text-[#334150]">AT_WEB</h4>
        </div>

        <div className="flex items-center justify-between px-3">
          <h4 className="text-[#7F8FA4] text-sm">Room 1</h4>
          <h4 className="text-[#334150]">Adult (1) - Children (0)</h4>
        </div>
      </div>
      {/*  */}

      <div className="border-t space-y-2 w-full px-3 py-5">
        <h4 className="font-medium">Room 1</h4>
        <div className="flex items-center justify-between ">
          <h4 className="text-[#7F8FA4] text-sm">Base Fare</h4>
          <h4 className="text-[#334150]">$20.000</h4>
        </div>
        <div className="flex items-center justify-between ">
          <h4 className="text-[#7F8FA4] text-sm">Total Price</h4>
          <h4 className="text-[#334150]">$50.00</h4>
        </div>
      </div>

      {/* button */}
      <div className="w-full px-3">
        <div className="flex justify-center w-full   py-5">
          <button
            className="border py-2.5 bg-gradient-to-r from-[#0E57B1] to-[#159AC2] text-white rounded-lg w-full"
            type="button"
          >
            Book Now
          </button>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={secureIcon} alt="" />
          <p className="text-[#334150] text-sm">Secure Checkout</p>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingConfirmation;

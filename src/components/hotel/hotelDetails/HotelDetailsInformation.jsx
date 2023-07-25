import HotelAvailableRoom from "./HotelAvailableRoom";
import HotelDetailsAbout from "./HotelDetailsAbout";
import HotelDetailsBookNow from "./HotelDetailsBookNow";

const HotelDetailsInformation = () => {
  return (
    <div className="max-w-[1170px] mx-auto tour-detail-information">
      <div className="flex justify-between gap-7">
        <div className="w-[770px] flex flex-col gap-8">
          {/* Hotel Detail heading */}
          <div className="flex flex-col gap-2">
            <h1 className="tour-detail-header grad-text-olc">
              Oyo 12123 Hotel Sweet Dreams (HOTEL)
            </h1>
            <p className="text-base font-normal text7F8FA4">
              1 National Highway 24 Lal Kuan Near Radha Krishna, \GHAZIABAD
            </p>
          </div>

          {/* Available Rooms */}
          <HotelAvailableRoom />

          {/* about the hotel */}
          <HotelDetailsAbout />
        </div>

        {/* Room Booking */}
        <div className="w-[370px]">
          <HotelDetailsBookNow />
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsInformation;

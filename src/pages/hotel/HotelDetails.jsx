import HotelDetailsAmenities from "../../components/hotel/hotelDetails/HotelDetailsAmenities";
import HotelDetailPhotos from "../../components/hotel/hotelDetails/HotelDetailPhotos";
import HotelDetailsInformation from "../../components/hotel/hotelDetails/HotelDetailsInformation";

const HotelDetails = () => {
  return (
    <div className="mt-28 max-w-[1170px] mx-auto">
      <HotelDetailPhotos />
      <div className="mt-12">
        <HotelDetailsInformation />
      </div>
      {/* hotel amenities*/}
      <div className="mt-12">
        <HotelDetailsAmenities />
      </div>
    </div>
  );
};

export default HotelDetails;

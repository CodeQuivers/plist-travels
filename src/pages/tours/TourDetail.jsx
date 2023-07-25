import TourDetailBanner from "../../components/tours/tourDetail/TourDetailBanner";
import TourDetailInformation from "../../components/tours/tourDetail/TourDetailInformation";

const TourDetail = () => {
  return (
    <div className="mt-28">
      <TourDetailBanner />
      <div className="mt-12">
        <TourDetailInformation />
      </div>
    </div>
  );
};

export default TourDetail;

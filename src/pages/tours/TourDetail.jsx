import { useState } from "react";
import TourDetailBanner from "../../components/tours/tourDetail/TourDetailBanner";
import TourDetailInformation from "../../components/tours/tourDetail/TourDetailInformation";
import { RiCloseLine } from "react-icons/ri";
import ImageModal from "../../components/Modals/ImageModal";

const TourDetail = () => {
  const [isModalOpen, setIsOpen] = useState(false);
  const modalClassNames = 'flex flex-col items-center'

  return (
    <div className={`mt-28 ${isModalOpen?modalClassNames:''}`}>
      <TourDetailBanner />
      <div className="mt-12">
        <TourDetailInformation setIsOpen={setIsOpen}/>
      </div>
      {/* <button onClick={()=>setIsOpen(true)}>OpenModal</button> */}
      {isModalOpen && <ImageModal setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default TourDetail;

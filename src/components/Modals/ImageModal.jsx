import React, { useState } from "react";

import roomImg1 from "../../assets/image/tours/Room/roomImg1.jpeg";
import roomImg2 from "../../assets/image/tours/Room/roomImg2.jpeg";
import roomImg3 from "../../assets/image/tours/Room/roomImg3.jpeg";
import roomImg4 from "../../assets/image/tours/Room/roomImg4.jpeg";
import roomImg5 from "../../assets/image/tours/Room/roomImg5.jpeg";
import ImageListForModal from "./ImageListForModal";
// import roomImg6 from "../../assets/image/tours/Room/roomImg-6.png";


const ImageModal = ({ setIsOpen }) => {
  const [heroImgId, setHeroImgId] = useState(0);
  const roomImages = [roomImg1,roomImg2, roomImg3, roomImg4, roomImg5];
  let dynamicContent = null;
  if (roomImages) {
    dynamicContent = roomImages.map((item, idx) => <ImageListForModal key={idx} imgId={idx} setHeroImgId={setHeroImgId} item={item}/>);
  }
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-gray-600 bg-opacity-50  h-full w-full z-[60]"
      ></div>
      <div className="absolute w-[77%] max-w-[1050px] overflow-y-auto top-24 mx-auto z-[500] ">
        <div className=" p-5  bg-white rounded py-6 px-7 ">
          <div className="flex flex-col gap-12">
            <div className="grad-border-olc">
              <img className="w-[1050px] h-[494px]"src={roomImages[heroImgId]} alt="" />
            </div>
            <div className="flex justify-between">{dynamicContent}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageModal;

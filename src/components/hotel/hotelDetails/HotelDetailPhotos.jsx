import hotelDetailPrimaryImg from "../../../assets/image/hotel/hotelphotos/Image.png";
import hotelDetailGridImg1 from "../../../assets/image/hotel/hotelphotos/Image-1.png";
import hotelDetailGridImg2 from "../../../assets/image/hotel/hotelphotos/Image-2.png";
import hotelDetailGridImg3 from "../../../assets/image/hotel/hotelphotos/Image-3.png";
import hotelDetailGridImg4 from "../../../assets/image/hotel/hotelphotos/Image-4.png";

const HotelDetailPhotos = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src={hotelDetailPrimaryImg}
            className="max-w-[570px] max-h-[416px] rounded-[10px]"
            alt=""
          />
        </div>

        {/* Grid image banner */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              src={hotelDetailGridImg1}
              className="max-w-[269px] max-h-[197px] rounded-[10px]"
              alt=""
            />
          </div>
          <div>
            <img
              src={hotelDetailGridImg2}
              className="max-w-[269px] max-h-[197px] rounded-[10px]"
              alt=""
            />
          </div>
          <div>
            <img
              src={hotelDetailGridImg3}
              className="max-w-[269px] max-h-[197px] rounded-[10px]"
              alt=""
            />
          </div>
          <div className="relative">
            <img
              src={hotelDetailGridImg4}
              className="max-w-[269px] max-h-[197px] rounded-[10px]"
              alt=""
            />
            <button className="absolute bottom-4 right-8 border px-2 rounded-md bg-white py-0.5 border-[#115DB3] text-sm ">
              More Photos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPhotos;

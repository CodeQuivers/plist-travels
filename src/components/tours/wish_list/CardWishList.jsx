import wishListImg1 from "../../../assets/image/tours/wish_list/wishlist-01.png";
import { AiFillHeart } from "react-icons/ai";
import heart from "../../../assets/image/home/Vector.png";

const CardWishList = () => {
  return (
    <div className="w-[566px] flex flex-col border border-[#169FC3] rounded-2xl text-white tour-bg relative">
      <img src={wishListImg1} alt="" className="w-[566px] h-[239px] " />
      <button className="absolute top-[21px] right-[21px] z-50">
        <img src={heart} alt="" className="bg-white rounded-lg p-[6px]" />
      </button>
      <h2 className="text-base text-medium ms-5 mt-5">Sweet Dreams</h2>
      <p className="text-xs ms-5 mb-5">Karineside</p>
    </div>
  );
};

export default CardWishList;

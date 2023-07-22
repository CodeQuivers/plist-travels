import React from "react";

import wishListImg1 from "../../../assets/image/tours/wish_list/wishlist-01.png";


const CardWishList = () => {
  return (
    <div className="w-[566px] flex flex-col border border-[#169FC3] rounded-2xl text-white tour-bg">
      <img src={wishListImg1} alt="" className="w-[566px] h-[239px] " />
      <h2 className="text-base text-medium ms-5 mt-5">Sweet Dreams</h2>
      <p className="text-xs ms-5 mb-5">Karineside</p>
    </div>
  );
};

export default CardWishList;

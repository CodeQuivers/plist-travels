import wishListImg from "../../../assets/image/hotel/wishlist.png";
import { FaRegHeart } from "react-icons/fa6";

const WishListItems = () => {
  return (
    <div className="max-md:px-5">
      {/* section title */}
      <div className="my-10">
        <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0F5AB2] to-[#1491C0]">
          Your Wishlist Starts Here
        </h1>
      </div>
      {/* wishlist items */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 justify-between">
        <div className="hotelCardBg ">
          <div className="relative ">
            <img
              className="rounded-t-[20px] w-[700px]"
              src={wishListImg}
              alt=""
            />
            <div>
              <button
                type="button"
                className="absolute top-3 right-3 bg-white p-1 rounded-lg"
              >
                <FaRegHeart size={20} />
              </button>
            </div>
          </div>
          <div className="px-5 py-4">
            <h3 className="font-semibold  text-white">Sweet Dreams</h3>
            <p className="text-sm font-medium text-white">Karineside</p>
          </div>
        </div>
        <div className="hotelCardBg ">
          <div className="relative ">
            <img
              className="rounded-t-[20px] w-[700px]"
              src={wishListImg}
              alt=""
            />
            <div>
              <button
                type="button"
                className="absolute top-3 right-3 bg-white p-1 rounded-lg"
              >
                <FaRegHeart size={20} />
              </button>
            </div>
          </div>
          <div className="px-5 py-4">
            <h3 className="font-semibold  text-white">Sweet Dreams</h3>
            <p className="text-sm font-medium text-white">Karineside</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListItems;

import availRoomImg1 from "../../../assets/image/hotel/hotelphotos/room1.png";
import availRoomImg2 from "../../../assets/image/hotel/hotelphotos/room2.png";
import availRoomImg3 from "../../../assets/image/hotel/hotelphotos/room3.png";

const HotelAvailableRoom = () => {
  return (
    <div className="border-gradientBox  flex flex-col gap-4 !py-5">
      <div>
        <h2 className="text-[#334150] font-semibold px-5">Available Rooms</h2>
      </div>
      <div className="w-full gray-divider"></div>
      {/* room -=------------------ */}
      <div className="flex flex-col gap-5 px-5">
        <div className="flex gap-12 items-center ">
          <div>
            <img src={availRoomImg1} className="" alt="" />
          </div>

          <div className="space-y-2 w-[150px] ">
            <h4 className="text-xs text7F8FA4">Room Pack:</h4>
            <p className="text-sm text-[#334150]">DOUBLE STANDARD</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs text7F8FA4">Room Pack:</h4>
            <p className="text-sm">Room Only</p>
          </div>

          <div className="space-y-2">
            <p className="text-xs text7F8FA4">Free cancellation until</p>
            <p className="text-sm">04/07/2023</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text7F8FA4">Price</p>
            <p className="text-base grad-text-olc font-medium">
              $<span>65.00</span>
            </p>
          </div>
          <div>
            <input type="radio" />
          </div>
        </div>
        <div className="flex gap-12 items-center ">
          <div>
            <img src={availRoomImg3} className="" alt="" />
          </div>

          <div className="space-y-2 w-[150px]">
            <h4 className="text-xs text7F8FA4">Room Pack:</h4>
            <p className="text-sm text-[#334150]">DOUBLE DELUXE </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs text7F8FA4">Room Pack:</h4>
            <p className="text-sm">Room Only</p>
          </div>

          <div className="space-y-2">
            <p className="text-xs text7F8FA4">Free cancellation until</p>
            <p className="text-sm">04/07/2023</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text7F8FA4">Price</p>
            <p className="text-base grad-text-olc font-medium">
              $<span>65.00</span>
            </p>
          </div>
          <div>
            <input type="radio" />
          </div>
        </div>
        <div className="flex gap-12 items-center ">
          <div>
            <img src={availRoomImg2} className="" alt="" />
          </div>

          <div className="space-y-2 w-[150px]">
            <h4 className="text-xs text7F8FA4">Room Pack:</h4>
            <p className="text-sm text-[#334150]">DOUBLE DELUXE </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs text7F8FA4">Room Pack:</h4>
            <p className="text-sm">Room Only</p>
          </div>

          <div className="space-y-2">
            <p className="text-xs text7F8FA4">Free cancellation until</p>
            <p className="text-sm">04/07/2023</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text7F8FA4">Price</p>
            <p className="text-base grad-text-olc font-medium">
              $<span>65.00</span>
            </p>
          </div>
          <div>
            <input type="radio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAvailableRoom;

import React from 'react'

import availRoomImg1 from "../../../assets/image/tours/tourDetails/availableRoom-1.png";
import availRoomImg2 from "../../../assets/image/tours/tourDetails/availableRoom-2.png";


const AvailableRooms = ({setIsOpen}) => {
  return (
    <div className="gard-border-olc flex flex-col gap-4 py-5">
            <div>
              <h2 className="text-[#334150] font-semibold px-5">
                Available Rooms
              </h2>
            </div>
            <div className="w-full gray-divider"></div>
            <div className="flex flex-col gap-5 px-5">
              <div className="flex jutify-between gap-9">
                <div onClick={()=>setIsOpen(true)} className='hover:cursor-pointer'>
                  <img src={availRoomImg1} className="max-w-[60px]" alt="" />
                </div>

                <div className="w-2/12">
                  <h4 className="text-xs text7F8FA4">Room Pack:</h4>
                  <p>Pick-up from Delhi City Hotels</p>
                </div>
                <div className="w-1/5 flex justify-center items-center">
                  <p className="text-sm">2023-07-09 (1 DAYS)</p>
                </div>
                <div className="w-1/5">
                  <p className="text-xs text7F8FA4">Free cancellation until</p>
                  <p className="text-sm">04/07/2023</p>
                </div>
                <div>
                  <p className="text-xs text7F8FA4">Price</p>
                  <p className="text-base grad-text-olc ">
                    $<span>65.00</span>
                  </p>
                </div>
                <div className="w-[16px] flex justify-center items-center">
                  <input type="radio" />
                </div>
              </div>
              <div className="flex jutify-between gap-9">
                <div>
                  <img src={availRoomImg2} className="max-w-[60px]" alt="" />
                </div>

                <div className="w-2/12">
                  <h4 className="text-xs text7F8FA4">Room Pack:</h4>
                  <p>Pick-up from Delhi City Hotels</p>
                </div>
                <div className="w-1/5 flex justify-center items-center">
                  <p className="text-sm">2023-07-09 (1 DAYS)</p>
                </div>
                <div className="w-1/5">
                  <p className="text-xs text7F8FA4">Free cancellation until</p>
                  <p className="text-sm">04/07/2023</p>
                </div>
                <div>
                  <p className="text-xs text7F8FA4">Price</p>
                  <p className="text-base grad-text-olc ">
                    $<span>65.00</span>
                  </p>
                </div>
                <div className="w-[16px] flex justify-center items-center">
                  <input type="radio" />
                </div>
              </div>
            </div>
          </div>
  )
}

export default AvailableRooms
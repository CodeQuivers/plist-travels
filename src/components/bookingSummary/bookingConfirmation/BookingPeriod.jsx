import React from 'react';

import longArrowRightIcon from "../../../assets/image/bookSummary/longArrowRight.svg";


const BookingPeriod = ({checkIn, checkOut}) => {
  return (
    <div className="w-11/12 flex justify-between">
          <div>
            <p className="text7F8FA4 text-sm">Check In</p>
            <p className="text334150 text-base">{checkIn}</p>
          </div>
          <div className="flex items-center">
            <p>
              <img src={longArrowRightIcon} alt="" />
            </p>
          </div>
          <div>
            <p className="text7F8FA4 text-sm">Check Out</p>
            <p className="text334150 text-base">{checkOut}</p>
          </div>
        </div>
  )
}

export default BookingPeriod

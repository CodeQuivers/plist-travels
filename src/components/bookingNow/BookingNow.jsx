import React from 'react'
import TravelerInformation from './TravelerInformation'
import BookedProductInformation from './BookedProductInformation'
import './booking-now.css'

const BookingNow = () => {
  return (
    <div className="max-w-[1170px] mx-auto booking-now">
      <div className="flex justify-between gap-7">
        <div className='w-7/12'>
        <TravelerInformation/>
        </div>
        <div className="w-2/5">
        <BookedProductInformation/>

        </div>
      </div>
    </div>
  )
}

export default BookingNow
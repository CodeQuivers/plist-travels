import React from 'react'

import tourDetailPrimaryImg from "../../../assets/image/tours/tourDetails/tourDetailPrimary.png"
import tourDetailGridImg1 from "../../../assets/image/tours/tourDetails/tourDetailGrid-1.png"
import tourDetailGridImg2 from "../../../assets/image/tours/tourDetails/tourDetailGrid-2.png"
import tourDetailGridImg3 from "../../../assets/image/tours/tourDetails/tourDetailGrid-3.png"
import tourDetailGridImg4 from "../../../assets/image/tours/tourDetails/tourDetailGrid-4.png"


const TourDetailBanner = () => {
  return (
    <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-2 gap-4'>
            {/* Primary Image in Banner */}
            <div>
                <img src={tourDetailPrimaryImg} className='max-w-[570px] max-h-[416px] rounded' alt="" />
            </div>

            {/* Grid image banner */}
            <div className='grid grid-cols-2 gap-4'>
                <div><img src={tourDetailGridImg1} className="max-w-[269px] max-h-[197px] rounded" alt="" /></div>
                <div><img src={tourDetailGridImg2} className="max-w-[269px] max-h-[197px] rounded" alt="" /></div>
                <div><img src={tourDetailGridImg3} className="max-w-[269px] max-h-[197px] rounded" alt="" /></div>
                <div><img src={tourDetailGridImg4} className="max-w-[269px] max-h-[197px] rounded" alt="" /></div>
            </div>
        </div>

    </div>
  )
}

export default TourDetailBanner
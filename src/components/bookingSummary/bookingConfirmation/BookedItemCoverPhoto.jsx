import React from 'react'

const BookedItemCoverPhoto = ({imgSource}) => {
  return (
    <div className="w-full">
        <img
          src={imgSource}
          className="max-w-[470px] w-full border-t-4"
          alt="booked item cover photo"
        />
      </div>
  )
}

export default BookedItemCoverPhoto

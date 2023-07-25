import React from 'react'

const BookedItemHeading = ({title, subTitle}) => {
  return (
    <div className="w-11/12 flex flex-col gap-2">
          <h1 className="text-2xl font-semibold grad-text-olc dmsan-font">
            {title}
          </h1>
          <p className="text7F8FA4 text-base">{subTitle}</p>
        </div>
  )
}

export default BookedItemHeading

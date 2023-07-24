import React, { useState } from "react";
import TourDetailBookNow from "./TourDetailBookNow";
import AvailableRooms from "./AvailableRooms";
import TourDetailAbout from "./TourDetailAbout";

const TourDetailInformation = () => {
  return (
    <div className="max-w-[1170px] mx-auto tour-detail-information">
      <div className="flex justify-between gap-7">
        <div className="w-2/3 flex flex-col gap-8">
          {/* Tour Detial heading */}
          <div className="flex flex-col gap-2">
            <h1 className="tour-detail-header grad-text-olc">
              Cycle Tour of Old or New Delhi
            </h1>
            <p className="text-base font-normal text7F8FA4">
              Delhi and NCR, India
            </p>
          </div>

          {/* Available Rooms */}
          <AvailableRooms />

          {/* about the tour */}
          <TourDetailAbout/>

          
        </div>

        {/* Room Booking */}
        <div className="w-1/3">
          <TourDetailBookNow />
        </div>
      </div>
    </div>
  );
};

export default TourDetailInformation;

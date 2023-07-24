import React from "react";

const TourIncludedFeature = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="tour-detail-header grad-text-olc">Feature Included</h2>
      <div className="grid grid-cols-2 justify-between">
        <div className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">UNKNOWN</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">TRANSPORT</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">MATERIAL</label>
        </div>
      </div>
    </div>
  );
};

export default TourIncludedFeature;

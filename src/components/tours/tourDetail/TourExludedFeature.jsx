import React from "react";

const TourExludedFeature = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="tour-detail-header grad-text-olc">Feature Excluded</h2>
      <div className="grid grid-cols-2 justify-between">
        <div className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="">UNKNOWN</label>
        </div>
      </div>
    </div>
  );
};

export default TourExludedFeature;

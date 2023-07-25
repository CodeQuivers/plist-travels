import React from "react";

const OtherBookingInfo = ({ other }) => {
  let content = null;
  if (other?.length > 0) {
    content = other.map((obj) => (
      <div className="flex justify-between">
        <p className="text-sm text7F8FA4">{obj.label}</p>
        <p className="text-base text334150">{obj.value}</p>
      </div>
    ));
  }
  return (
    <div className="w-11/12 flex flex-col gap-5">
      {content}
    </div>
  );
};

export default OtherBookingInfo;

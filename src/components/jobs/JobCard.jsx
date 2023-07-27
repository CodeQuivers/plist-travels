import React from "react";
import jobIcon from "../../assets/image/jobs/jobIcon.svg";
import dotIcon from "../../assets/image/jobs/dotIcon.svg";

const JobCard = () => {
  return (
    <div className="w-full grad-border-olc-16 p-7 flex justify-between">
      {/* company icon */}
      <div className="w-[58px] h-[58px] bg-[#F5F5FA] flex justify-center items-center rounded-full">
        <img src={jobIcon} className="w-[22px] h-[22px]" alt="" />
      </div>

      {/* information */}
      <div className="w-3/4 pop-font flex flex-col gap-1">
        <h3 className="text-2xl font-semibold">Virtual Scheduler - Remote</h3>
        <div className="text-base text-[#23262F]">
          <p className="flex gap-4 items-center">
            <span>New York</span>
            <img src={dotIcon} alt="" />
            <span>Shake Shack</span>
          </p>
        </div>
        <p className="text7F8FA4">
          Lines for Life also offers a great benefits package valued at over
          $9,500 that includes full coverage for employee health, dental,
          vision, short
        </p>
        <div className="flex gap-5 mt-5">
          <p className="font-medium text7F8FA4 bg-[#F5F5FA] px-4 py-1 rounded">
            Management
          </p>
          <p className="font-medium text7F8FA4 bg-[#F5F5FA] px-4 py-1 rounded">
            Remote
          </p>
        </div>
      </div>

      {/* payment amount */}
      <div className="w-[14%]">
        <p className="text-sm font-medium gray-border px-7 py-3">
          $40-48 hourly
        </p>
      </div>
    </div>
  );
};

export default JobCard;

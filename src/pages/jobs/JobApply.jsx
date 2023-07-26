import React from "react";

import jobIcon from "../../assets/image/jobs/jobIcon.svg";
import dotIcon from "../../assets/image/jobs/dotIcon.svg";

import JobApplyForm from "../../components/jobs/JobApplyForm";

const JobApply = () => {
  
  return (
    <div className="w-full grad-border-olc-16">
      {/* Head part of the Job deatil */}
      <div className="w-full flex justify-between pop-font p-5">
        <div className="flex gap-6">
          <div className="w-[58px] h-[58px] bg-[#F5F5FA] flex justify-center items-center rounded-full">
            <img src={jobIcon} className="w-[22px] h-[22px]" alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">
              Virtual Scheduler - Remote
            </h3>
            <div className="text-base text-[#23262F]">
              <p className="flex gap-4 items-center">
                <span>New York</span>
                <img src={dotIcon} alt="" />
                <span>Shake Shack</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="gray-divider mb-6"></div>

      <div className="flex gap-16 px-7 pop-font">
        <div>
          <p className="text-xs text-[#89898] ">Experience</p>
          <p className="text-sm font-medium text[#202020]">Minimum 1 Year</p>
        </div>
        <div>
          <p className="text-xs text-[#89898] ">Work Level</p>
          <p className="text-sm font-medium text[#202020]">Senior Level</p>
        </div>
        <div>
          <p className="text-xs text-[#89898] ">Job Types</p>
          <p className="text-sm font-medium text[#202020]">Full Time Jobs</p>
        </div>
        <div>
          <p className="text-xs text-[#89898] ">Vacancy</p>
          <p className="text-sm font-medium text[#202020]">10 Male/Female</p>
        </div>
        <div>
          <p className="text-xs text-[#89898] ">Apply Deadline </p>
          <p>10 May 2023</p>
        </div>
        <div>
          <p className="text-xs text-[#89898] ">Offer Salary</p>
          <p className="text-sm font-medium text[#202020]">$2150,0 / Month</p>
        </div>
      </div>
      {/* Divider  */}
      <div className="gray-divider mb-6 mb-8 mt-3"></div>

      {/* Job description */}
      <div className="pop-font px-5 flex flex-col gap-6">
        {/* Apply form */}
        <JobApplyForm/>
      </div>

      {/* Divider  */}
      <div className="gray-divider mb-6 my-7"></div>

      <div className="w-full flex justify-between pop-font p-5">
        <div className=" old-logo-color text-white dmsan-font font-bold flex justify-center items-center rounded-[10px]">
          <div className="w-[132px] h-[48px] flex justify-center items-center ">
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;

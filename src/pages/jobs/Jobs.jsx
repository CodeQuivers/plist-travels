import React from "react";
import JobPageHader from "../../components/jobs/JobPageHader";

import JobCard from "../../components/jobs/JobCard";
import PagingBar from "../../components/tours/tourSearchResult/PagingBar";

const Jobs = () => {
  return (
    <div className="mt-24 ">
      <JobPageHader />
      {/* Divider */}
      <div className="gray-divider mt-5 mb-12"></div>

      {/* Jobs */}
      <div className="w-[1170px] mx-auto flex flex-col items-center gap-5">
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <PagingBar/>
      </div>
    </div>
  );
};

export default Jobs;

import Job from "./Job";

import React from "react";

const JobList = ({ jobs, changeJob, jobSelected }) => (
  <div>
    {jobs.map((job) => (
      <Job
        key={job.id}
        job={job}
        changeJob={changeJob}
        jobSelected={jobSelected}
      />
    ))}
  </div>
);
export default JobList;

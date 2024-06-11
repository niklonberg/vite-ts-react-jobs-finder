import React from "react";
import { Job } from "../types/Job";

interface JobListingProps {
  job: Job;
}

const JobListing: React.FC<JobListingProps> = ({ job }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-3xl">
      <p>{job.type}</p>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <div>{`${job.salary}  / Year`}</div>
      <a
        href={`/jobs/${job.id}`}
        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold inline-block mt-4"
      >
        Read More
      </a>
    </div>
  );
};

export default JobListing;

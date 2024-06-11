import React from "react";
import { Job } from "../types/Job";

interface JobListingProps {
  job: Job;
}

const JobListing: React.FC<JobListingProps> = ({ job }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-2xl flex flex-col justify-between">
      <div>
        <p className="text-gray-500 my-2">{job.type}</p>
        <h3 className="font-bold text-lg mb-6">{job.title}</h3>
        <p className="mb-4">{job.description}</p>
        <button>More</button>
        <div className="border-b-2 pb-2 text-sm text-indigo-500 font-bold">{`${job.salary} / Year`}</div>
      </div>
      <div className="flex items-center justify-between my-4">
        <address className="text-orange-700 not-italic">{job.location}</address>
        <a
          href={`/jobs/${job.id}`}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default JobListing;

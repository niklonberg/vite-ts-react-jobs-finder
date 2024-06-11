import React from "react";
import { Job } from "../types/Job";

interface JobListingProps {
  job: Job;
}

const JobListing: React.FC<JobListingProps> = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 120) + "...";
  }

  return (
    <div className="bg-white p-4 shadow-md rounded-2xl flex flex-col justify-between">
      <div>
        <p className="text-gray-500 my-2">{job.type}</p>
        <h3 className="font-bold text-lg mb-6">{job.title}</h3>
        <p className="mb-4">{description}</p>
        <button
          className="text-indigo-600 py-4 pr-4 hover:text-indigo-800"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Less" : "More"}
        </button>
        <div className="border-b-2 pb-2 text-sm text-indigo-600">{`${job.salary} / Year`}</div>
      </div>
      <div className="flex items-center justify-between my-4">
        <address className="text-orange-700 not-italic">{job.location}</address>
        <a
          href={`/jobs/${job.id}`}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-semibold"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default JobListing;

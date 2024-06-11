import React from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = () => {
  console.log(jobs);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2>Browse Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobListing job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;

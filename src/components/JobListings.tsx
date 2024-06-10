import React from "react";
import jobs from "../jobs.json";

const JobListings = () => {
  console.log(jobs);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <h2>Browse Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 shadow-md">
            <p>{job.type}</p>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListings;

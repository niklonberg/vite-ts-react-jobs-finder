import React from "react";
import jobs from "../jobs.json";

const JobListings = () => {
  console.log(jobs);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2>Browse Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-4 shadow-md rounded-3xl">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;

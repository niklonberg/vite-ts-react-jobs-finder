import React from "react";
import jobs from "../jobs.json";

const JobListings = () => {
  console.log(jobs);
  return (
    <section>
      <h2>Browse Jobs</h2>
      <div>Job 1</div>
      <div>Job 2</div>
      <div>Job 3</div>
    </section>
  );
};

export default JobListings;

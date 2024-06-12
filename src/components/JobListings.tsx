import React from "react";
import JobListing from "./JobListing";
import { Job } from "../types/Job";

const JobListings = ({ showAll = false }) => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-center text-2xl text-indigo-500 font-bold mb-4">
          {showAll ? "All Jobs" : "Recent Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            jobs.map((job) => <JobListing key={job.id} job={job} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;

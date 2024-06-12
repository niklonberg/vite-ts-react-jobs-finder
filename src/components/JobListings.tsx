import React from "react";
import JobListing from "./JobListing";
import { Job } from "../types/Job";
import Spinner from "./Spinner";

const JobListings = ({ showAll = false }) => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchJobs() {
      const apiUrl = showAll
        ? "http://localhost:8000/jobs"
        : "http://localhost:8000/jobs?_limit=3";
      try {
        const res = await fetch(apiUrl);
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
        {isLoading ? (
          <Spinner isLoading={isLoading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;

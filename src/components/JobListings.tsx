import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = ({ showAll = false }) => {
  const jobsData = showAll ? jobs : jobs.slice(0, 3);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-center text-2xl text-indigo-500 font-bold mb-4">
          {showAll ? "All Jobs" : "Recent Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobsData.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;

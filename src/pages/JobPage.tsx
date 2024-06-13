import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Job } from "../types/Job";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";

const JobPage = ({
  deleteJob,
}: {
  deleteJob: (id: string) => Promise<void>;
}) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the job ID from the URL
  const job = useLoaderData() as Job | undefined;

  if (!id || !job) return <p>{!id ? "Job ID not found" : "Job not found"}</p>;

  function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    deleteJob(id);
    toast.success("Job deleted successfully");
    navigate("/jobs");
  }

  return (
    <>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" />
          Back to Job Listings
        </Link>
      </div>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-2" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4">{`${job.salary} / Year`}</p>
              </div>
            </main>
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Company Info</h3>
                <h2 className="text-2xl mb-2">{job.company.name}</h2>
                <p>{job.company.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/jobs/edit/${id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  onClick={() => handleDelete(id)}
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// 'Vanilla' way to fetch data from an API
// const JobPage = () => {
//   const { id } = useParams<{ id: string }>(); // Get the job ID from the URL, unsure if <{ id: string }> is necessary
//   const [job, setJob] = React.useState<Job | null>(null);
//   const [isLoading, setIsLoading] = React.useState(true);

//   React.useEffect(() => {
//     async function fetchJob() {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJob(data);
//       } catch (error) {
//         console.error("Error fetching job:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchJob();
//   }, [id]);

//   if (isLoading) return <Spinner isLoading />;

//   if (!job) return <div>Job not found</div>;

//   return (
//     <section>
//       <h1>{job.title}</h1>
//       <p>{job.description}</p>
//       {/* Render additional job details here */}
//     </section>
//   );
// };

export default JobPage;

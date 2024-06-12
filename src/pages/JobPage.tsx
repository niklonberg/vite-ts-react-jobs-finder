import {
  useParams,
  useLoaderData,
  LoaderFunctionArgs,
  LoaderFunction,
} from "react-router-dom";
import { Job } from "../types/Job";

const JobPage = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const job = useLoaderData() as Job;

  if (!job) return <p>Job not found</p>;

  return (
    <section>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      {/* Render additional job details here */}
    </section>
  );
};

const jobLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
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

export { JobPage as default, jobLoader };

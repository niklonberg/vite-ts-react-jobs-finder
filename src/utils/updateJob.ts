import { Job } from "../types/Job";

async function updateJob(job: Job) {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  return;
}

export default updateJob;

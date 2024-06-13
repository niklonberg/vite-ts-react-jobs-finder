import { NewJob } from "../types/Job";

async function addJob(newJob: NewJob) {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });

  return;
}

export default addJob;

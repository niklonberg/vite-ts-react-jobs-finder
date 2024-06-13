async function deleteJob(id: string) {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });

  return;
}

export default deleteJob;

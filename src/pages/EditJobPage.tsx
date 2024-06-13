import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import JobForm from "../components/JobForm";
import { Job } from "../types/Job";
import { toast } from "react-toastify";

const EditJobPage = ({
  updateJobSubmit,
}: {
  updateJobSubmit: (updatedJob: Job) => Promise<void>;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const jobToUpdate = useLoaderData() as Job | undefined;

  if (!id || !jobToUpdate)
    return <p>{!id ? "Job ID not found" : "Job not found"}</p>;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedJob: Job = {
      id: id as string,
      type: formData.get("type") as string,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      salary: formData.get("salary") as string,
      location: formData.get("location") as string,
      company: {
        name: formData.get("company") as string,
        description: formData.get("company_description") as string,
        contactEmail: formData.get("contact_email") as string,
        contactPhone: formData.get("contact_phone") as string,
      },
    };

    updateJobSubmit(updatedJob);
    toast.success("Job updated successfully");
    return navigate(`/jobs/${id}`);
  }

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-3xl py-20">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <JobForm handleSubmit={handleSubmit} jobToUpdate={jobToUpdate} />
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;

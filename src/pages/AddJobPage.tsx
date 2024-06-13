import React from "react";
import { useNavigate } from "react-router-dom";
import { NewJob } from "../types/Job";
import JobForm from "../components/JobForm";
import { toast } from "react-toastify";

const AddJobPage = ({
  addJobSubmit,
}: {
  addJobSubmit: (newJob: NewJob) => Promise<void>;
}) => {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newJob: NewJob = {
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

    addJobSubmit(newJob);
    toast.success("Job added successfully");
    return navigate("/jobs");
  }

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-3xl py-20">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <JobForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;

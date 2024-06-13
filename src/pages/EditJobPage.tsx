import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { Job } from "../types/Job";

const EditJobPage = () => {
  const job = useLoaderData() as Job | undefined;

  return <div>{job?.title}</div>;
};

export default EditJobPage;

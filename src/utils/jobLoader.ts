import { LoaderFunctionArgs, LoaderFunction } from "react-router-dom";

const jobLoader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export default jobLoader;

import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={isLoading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;

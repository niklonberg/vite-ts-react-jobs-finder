import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen">
        <FaExclamationTriangle className="text-6xl text-yellow-400" />
        <h1 className="text-4xl my-4">404 Not Found</h1>
        <p>This page does not exist</p>
        <Link
          to="/"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-6"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

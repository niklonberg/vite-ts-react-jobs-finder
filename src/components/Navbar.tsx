import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-white border-b-2 border-indigo-500">
      <ul className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6">
        <div className="block flex flex-shrink-0">
          <Link to="/" className="flex items-center gap-4 mr-4">
            <img className="h-10 w-auto" src={logo} alt="React Jobs logo" />
            <span className="hidden sm:block">React Jobs</span>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/add-job">Add Job</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

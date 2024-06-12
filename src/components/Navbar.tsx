import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  // the isActive prop is passed by NavLink
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

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
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/jobs" className={linkClass}>
            Jobs
          </NavLink>
          <NavLink to="/add-job" className={linkClass}>
            Add Job
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

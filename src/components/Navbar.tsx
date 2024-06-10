import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center justify-between">
        <div>
          <a className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="React Jobs logo" />
            <span>React Jobs</span>
          </a>
        </div>
        <div>
          <a href="">Home</a>
          <a href="">Jobs</a>
          <a href="">Add Job</a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

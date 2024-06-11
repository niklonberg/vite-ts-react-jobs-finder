import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-white ">
      <ul className="flex items-center justify-between max-w-7xl mx-auto py-4 px-6">
        <div className="block flex flex-shrink-0">
          <a className="flex items-center gap-4 mr-4">
            <img className="h-10 w-auto" src={logo} alt="React Jobs logo" />
            <span className="hidden sm:block">React Jobs</span>
          </a>
        </div>
        <div className="flex gap-6">
          <a href="">Home</a>
          <a href="">Jobs</a>
          <a href="">Add Job</a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

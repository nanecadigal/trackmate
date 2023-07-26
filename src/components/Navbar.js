import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav className="bg-white sticky inset-0 z-10 border border-white/80 bg-opacity-80 shadow-md backdrop-blur-2xl">
      <div className="flex items-center justify-between max-w-screen p-2 md:px-10 mx-auto flex-wrap">
        <h1 className="text-2xl">Trackmate</h1>
        <button
          type="button"
          className="flex items-center w-10 h-10 rounded hover:bg-gray-100 justify-center focus:outline-none md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open Menu</span>
          <svg
            className="w-6 h-6 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2H12a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 18Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${open ? "hidden" : ""}`}>
          <ul className="flex flex-col md:flex-row bg-gray-50 md:bg-white md:bg-opacity-80 mt-4 md:mt-0 p-4 items-center gap-3">
            <li>
              <Link
                to="/time-tracking"
                className="text-lg hover:text-purple-900"
              >
                Time Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/location-tracking"
                className="text-lg hover:text-purple-900"
              >
                Location Tracking
              </Link>
            </li>
            <li>
              <Link to="/scheduling" className="text-lg hover:text-purple-900">
                Scheduling
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-lg hover:text-purple-900">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-lg hover:text-purple-900">
                Contact Us
              </Link>
            </li>
            <button type="button" className="login">
              <Link to="/login" className="text-lg">
                Login
              </Link>
            </button>
            <button type="button" className="register">
              <Link to="/register" className="text-lg">
                Register
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

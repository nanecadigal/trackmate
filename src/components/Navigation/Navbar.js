import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(true);
  const [toggleNavbar, setToggleNavbar] = useState(true);

  return (
    <nav className="bg-white border-gray-200 sticky inset-0 z-10 h-max w-full max-w-full rounded-none border border-white/80 bg-opacity-80 py-2 px-4 shadow-md backdrop-blur-2xl backgrdop-saturate-200">
      <div className="flex flex-wrap justify-between items-center mx-auto p-4">
        <Link className="flex items-center">
          {/* Switch to Image Logo */}
          {/* <img
            // src={}
            className="h-8 mr-3"
            alt="Trackmate Logo"
          /> */}
          {/* Text Logo */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            TrackMate
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setToggleNavbar(!toggleNavbar)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 ${
            toggleNavbar ? "hidden" : ""
          }`}
        >
          <ul className="flex flex-col justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/time-tracking"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Time Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/location-tracking"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Location Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/scheduling"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Scheduling
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button
                className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"
                onClick={() => setToggleBtn(!toggleBtn)}
              >
                More{" "}
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center justify-between w-full my-2 text-white rounded md:w-auto bg-blue-500 hover:bg-blue-400 md:border-0 px-4 py-2"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center justify-between w-full my-2 text-white rounded md:w-auto bg-indigo-700 hover:bg-indigo-500 md:border-0 px-4 py-2"
              >
                Get started
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`mt-1 border-gray-200 bg-gray-50 md:bg-white border-t z-40 ${
          toggleBtn ? "hidden" : ""
        }`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <Link
                to="/some-nav"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                <div className="font-semibold">Some navigation</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/some-nav"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                <div className="font-semibold">Some navigation</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/some-nav"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                <div className="font-semibold">Some navigation</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                to="/some-nav"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                <div className="font-semibold">Some navigation</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/some-nav"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                <div className="font-semibold">Some navigation</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/some-nav"
                className="block p-3 rounded-lg hover:bg-gray-100"
              >
                <div className="font-semibold">Some navigation</div>
                <span className="text-sm text-gray-500">
                  Connect with third-party tools that you're already using.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

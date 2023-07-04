import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import profilepic from "../../assets/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import Sidebar from "../navigation/Sidebar";
import Overview from "../dashboard/Overview";

const Profile = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="p-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/landing-page" className="flex ml-2 md:mr-24">
                {/* <img src={} className="h-8 mr-3" alt="TrackMate Logo" /> */}
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  TrackMate
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="">
                <div className="flex flex-col flex-wrap">
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    onClick={toggleBtn}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-10 h-10 rounded-full object-cover border border-black"
                      src={profilepic}
                      alt="Profile Picture"
                    />
                  </button>
                </div>
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow relative top-50">
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-900">First Lastname</p>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      admin@gmail.com
                    </p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/logout"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar />
      <Overview />
    </>
  );
};

export default Profile;

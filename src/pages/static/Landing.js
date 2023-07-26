import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

import locationTracking from "../../assets/images/undraw_location_tracking_re_n3ok.svg";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <header className="">
        <div className="flex flex-col items-center md:flex-row h-screen">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start h-full p-10">
            <h1 className="mb-4 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center md:text-left">
              Employee <br />{" "}
              <span className="text-purple-500">Tracking Software</span>
            </h1>
            <p className="mb-3 text-lg text-gray-700 text-center md:text-xl md:text-left">
              Simplify employee scheduling, time & location tracking. Easily
              track employee, no matter where they are working.
            </p>
            <div className="flex gap-3">
              <Link
                to="/register"
                className="px-4 py-2 text-lg bg-purple-500 text-white rounded-lg"
              >
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="px-4 py-2 border-2 border-purple-500 text-gray-900 text-lg rounded-lg"
              >
                See Trackmate Plans
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center h-full">
            <img alt="Some images" src={locationTracking} className="w-" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Landing;

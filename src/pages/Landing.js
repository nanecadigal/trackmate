import React from "react";
import Navbar from "../components/navigation/Navbar";
import { Link } from "react-router-dom";
import bg from "../assets/Wavy_Tech-12_Single-11-removebg-preview.png";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="fixed top-0 left-0 w-full max-w-full grid grid-cols-1 md:grid-cols-2 items-center px-10">
        <div className="flex flex-col items-center md:items-start justify-center h-screen">
          <h1 className="text-[30px] md:text-[50px] tracking-wide mb-5">Employee</h1>
          <h1 className="text-[30px] md:text-[50px] tracking-wide">Tracking Software</h1>
          <p className="mt-5 text-md md:text-2xl text-center md:text-left">
            Simplify employee scheduling, time & location tracking. Easily track
            employee, no matter where they are working.
          </p>
          <div className="flex gap-6 items-center mt-12">
            <button
              type="button"
              className="p-4 bg-indigo-700 hover:bg-indigo-600 text-white text-xl rounded"
            >
              <Link>Get Started</Link>
            </button>
            <button className="bg-gray-100 hover:bg-gray-300 p-4 rounded text-xl">
              <Link>See our plans</Link>
            </button>
          </div>
        </div>
        <div className="mx-auto">
        <img src={bg} alt="Time Tracker" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

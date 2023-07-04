import React from "react";

const Overview = () => {
  return (
    <div className="sm:ml-64">
      <div className="px-4 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex justify-start h-80 rounded bg-gray-50 col-span-2 p-3">
            <p className="text-lg text-black">Check In</p>
          </div>
          <div className="flex justify-start h-80 rounded bg-gray-50 p-3">
            <p className="text-lg text-black">Schedule</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex justify-start h-80 rounded bg-gray-50 col-span-2 p-3">
            <p className="text-lg text-black">Check Out </p>
          </div>
          <div className="flex justify-start h-80 rounded bg-gray-50 p-3">
            <p className="text-lg text-black">Pending Approval</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

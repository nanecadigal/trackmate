import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
} from "recharts";

const Overview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const dataBarChart = [
    {
      date: "Mar 10",
      sl: 20,
      pl: 13,
      upl: 3,
    },
    {
      date: "Mar 11",
      sl: 7,
      pl: 25,
      upl: 2,
    },
    {
      date: "Mar 12",
      sl: 17,
      pl: 14,
      upl: 10,
    },
    {
      date: "Mar 13",
      sl: 6,
      pl: 8,
      upl: 13,
    },
    {
      date: "Mar 15",
      sl: 15,
      pl: 23,
      upl: 3,
    },
  ];

  return (
    <div className="content">
      <h1 className="text-2xl mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col w-full rounded-lg border shadow-md">
            <h2 className="p-2 text-lg">Total Employees</h2>
            <p className="text-center py-4 text-2xl font-semibold">1,321</p>
            <p className="bg-purple-500 p-2 rounded-b-lg text-white">
              97 applications need review
            </p>
          </div>
          <div className="flex flex-col w-full rounded-lg border shadow-md">
            <h2 className="p-2 text-lg">Total Overtime</h2>
            <p className="text-center py-4 text-2xl font-semibold">369</p>
            <p className="bg-purple-500 p-2 rounded-b-lg text-white">
              123 overtime schedules needs approval
            </p>
          </div>
          <div className="flex flex-col w-full rounded-lg border shadow-md">
            <h2 className="p-2 text-lg">Total Leave</h2>
            <p className="text-center py-4 text-2xl font-semibold">132</p>
            <p className="bg-purple-500 p-2 rounded-b-lg text-white">
              143 paid leave plans needs approval
            </p>
          </div>
          <div className="flex flex-col w-full rounded-lg border shadow-md">
            <h2 className="p-2 text-lg">Total Task</h2>
            <p className="text-center py-4 text-2xl font-semibold">1,321</p>
            <p className="bg-purple-500 p-2 rounded-b-lg text-white">
              97 applications needs review
            </p>
          </div>
        </div>
        <div className="col-span-3 border px-8 py-2 flex justify-between flex-col">
          <h1 className="text-xl font-semibold mb-4">Time Off Statistics</h1>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              width={500}
              height={300}
              data={dataBarChart}
              margin={{
                top: 5,
                right: 30,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sl" fill="#06B2E3" />
              <Bar dataKey="pl" fill="#FFD194" />
              <Bar dataKey="upl" fill="#FC5B5B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="border p-2">
          <h1 className="text-xl font-semibold mb-4">Work Type</h1>
        </div>
      </div>
    </div>
  );
};

export default Overview;

import { useState, useEffect } from "react";
import data from "../../../data/employeeData";
import FilterEmployee from "../../../components/FilterEmployee";
const Employees = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = firstIndex + recordsPerPage;

  const currentRecords = data.slice(firstIndex, lastIndex);
  const totalRecords = data.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const [filteredTotalRecords, setFilteredTotalRecords] =
    useState(totalRecords);

  const renderPageNumbers = () => {
    if (totalPages <= 10) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      const pages = [];

      if (currentPage <= 5) {
        // Show first 7 pages and ellipsis
        pages.push(...Array.from({ length: 7 }, (_, index) => index + 1));
        pages.push("ellipsis");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 4) {
        // Show last 7 pages and ellipsis
        pages.push(1);
        pages.push("ellipsis");
        pages.push(
          ...Array.from({ length: 7 }, (_, index) => totalPages - 6 + index)
        );
      } else {
        // Show current page, 3 pages before, 3 pages after, and ellipsis on both sides
        pages.push(1);
        pages.push("ellipsis");
        pages.push(
          ...Array.from({ length: 3 }, (_, index) => currentPage - 1 + index)
        );
        pages.push(currentPage);
        pages.push(
          ...Array.from({ length: 3 }, (_, index) => currentPage + 1 + index)
        );
        pages.push("ellipsis");
        pages.push(totalPages);
      }

      return pages;
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredRecords = selectedStatus
    ? currentRecords.filter((record) => record.status === selectedStatus)
    : currentRecords;

  useEffect(() => {
    setFilteredTotalRecords(filteredRecords.length);
  }, [filteredRecords]);

  const categories = [
    { name: "Total", value: 1321 },
    { name: "Online", value: 231 },
    { name: "Offline", value: 687 },
    { name: "Working", value: 201 },
    { name: "On Break", value: 98 },
    { name: "PTO", value: 305 },
    { name: "VTO", value: 39 },
  ];

  const colors = [
    "text-purple-500",
    "text-green-500",
    "text-orange-500",
    "text-pink-500",
    "text-blue-500",
    "text-cyan-500",
    "text-yellow-500",
  ];

  const totalValue = categories.reduce((acc, item) => acc + item.value, 0);
  const calculatePercentage = (value) => {
    return ((value / totalValue) * 100).toFixed(2);
  };
  return (
    <div className="content">
      <h1 className="text-2xl mb-4">Employees</h1>
      <div className="flex items-center justify-between">
        {/* {categories.map((itm, idx) => {
          return (
            <ul>
              <li key={idx} className="flex justify-between items-center">
                <span className={`${colors[idx % colors.length]}`}>
                  {itm.name}: {itm.value} ({calculatePercentage(itm.value)}%)
                </span>
              </li>
            </ul>
          );
        })} */}
        <ul>
          <li>
            <span>Total:</span>
          </li>
        </ul>
        <FilterEmployee
          categories={categories}
          onSelectStatus={setSelectedStatus}
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <table className="w-full text-left">
          <thead className="uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Position</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((data, idx) => {
              return (
                <tr className="hover:bg-gray-100" key={idx}>
                  <td className="px-6 py-2 font-semibold text-sm">{data.id}</td>
                  <td className="px-6 py-2 font-semibold text-sm">
                    {data.name}
                  </td>
                  <td className="px-6 py-2 font-semibold text-sm">
                    {data.email}
                  </td>
                  <td className="px-6 py-2 font-semibold text-sm">
                    {data.phone}
                  </td>
                  <td className="px-6 py-2 font-semibold text-sm">
                    {data.status}
                  </td>
                  <td className="px-6 py-2 font-semibold text-sm">
                    {data.position}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      type="button"
                      className="cursor-pointer flex items-center justify-center gap-2 bg-purple-500 px-4 py-2 rounded-lg text-white transition ease-in-out hover:scale-110 duration-300"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="text-sm">View</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav className="flex items-center justify-between pt-4">
        <span class="text-sm font-normal text-gray-500">
          Showing{" "}
          <span class="font-semibold text-gray-900 ">
            {Math.min(firstIndex + 1, filteredTotalRecords)}-
            {Math.min(lastIndex, filteredTotalRecords)}
          </span>{" "}
          of <span class="font-semibold text-gray-900 ">{totalRecords}</span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <button
              type="button"
              className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {renderPageNumbers().map((pageNum, index) => (
            <li key={index}>
              {pageNum === "ellipsis" ? (
                <span className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300">
                  ...
                </span>
              ) : (
                <button
                  className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                    currentPage === pageNum ? "bg-gray-200 text-gray-700" : ""
                  }`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Employees;

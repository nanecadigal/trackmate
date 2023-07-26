import { useState } from "react";
import locData from "../../../data/data";
import Modal from "../../../components/Modal";

const Location = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const [modalOpen, setModalOpen] = useState(false);

  const currentRecords = locData.slice(firstIndex, lastIndex);
  const totalRecords = locData.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

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
  return (
    <div className="content">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left">
          <thead className="uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-3">Action</th>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Device</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Time / Date</th>
              <th className="px-6 py-3">Coordinates</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((data, idx) => {
              return (
                <tr className="hover:bg-gray-100" key={idx}>
                  <td className="px-4 py-2">
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
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
                      <span className="text-lg">View</span>
                    </button>
                  </td>
                  <td className="px-6 py-2 font-semibold text-lg">{data.id}</td>
                  <td className="px-6 py-2 font-semibold text-lg">
                    {data.name}
                  </td>
                  <td className="px-6 py-2 font-semibold text-lg">
                    {data.device}
                  </td>
                  <td className="px-6 py-2 font-semibold text-lg">
                    {data.status}
                  </td>
                  <td className="px-6 py-2 font-semibold text-lg">
                    {data.dateTime}
                  </td>
                  <td className="px-6 py-2 font-semibold text-lg">
                    {data.coordinates}
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
            {firstIndex + 1}-{Math.min(lastIndex, totalRecords)}
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
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNum) => (
              <li
                key={pageNum}
                className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === pageNum ? "bg-gray-200 text-gray-700" : ""
                }`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </li>
            )
          )}
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

export default Location;

import { useEffect, useState, useContext } from "react";
import Sidebar from "../components/Sidebar";
import axios from "../axios-api";
import { useAuthContext } from "../hooks/useAuthContext";

const Dashboard = () => {
  const { dispatch } = useAuthContext();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get("/getMe", config)
        .then((response) => {
          const userData = response.data;
          setData(userData);
          console.log(userData);
        })
        .catch((error) => {
          // Handle error here
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <nav className="bg-white bg-opacity-80 border-2 border-b border-gray-100 fixed top-0 left-0 z-50 w-full">
        <div className="flex items-center justify-between max-w-screen p-2 mx-auto h-16">
          <button
            type="button"
            className="flex items-center w-10 h-10 rounded hover:bg-gray-100 justify-center focus:outline-none md:hidden"
            onClick={() => {
              setOpen(!open);
              console.log(open);
            }}
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
          <img alt="Trackmate Logo" />
          <div className="flex items-center justify-between space-x-3">
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6l-4 4 .01-18c0-1.1.89-2 1.99-2Zm2 12h12v-2H6v2Zm12-3H6V9h12v2ZM6 8h12V6H6v2Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-6 h-6 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5ZM6.15 2.65l1.43 1.43a8.445 8.445 0 0 0-3.55 6.42h-2c.14-3.2 1.72-6.02 4.12-7.85Zm15.82 7.85h-2a8.496 8.496 0 0 0-3.54-6.42l1.42-1.43a10.49 10.49 0 0 1 4.12 7.85ZM12.4 21.96A2.014 2.014 0 0 1 9.99 20h4c0 .28-.05.54-.15.78-.26.6-.79 1.04-1.44 1.18Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="hidden md:block">
              {/* {user.firstname} {user.lastname} */}
            </p>
          </div>
        </div>
      </nav>
      <Sidebar openSidebar={open} user={data} />
    </>
  );
};

export default Dashboard;

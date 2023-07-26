import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios-api";
import { useAuthContext } from "../../hooks/useAuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPass] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all the fields");
    }

    try {
      const response = await axios.post("/login", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("token", token);
      dispatch({ type: "LOGIN", payload: user });

      if (user.isAdmin) {
        navigate("/app/overview");
      } else {
        navigate("/app/checkin");
      }

      setUser(user);

      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-100 md:bg-white h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="px-14 py-6 md:bg-gray-100 flex flex-col items-center justify-center rounded-lg">
        <img alt="Trackmate Logo" className="my-10" />
        <form
          className="flex flex-col items-center justify-center space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded p-2 focus:outline-none w-80"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="relative">
            <input
              type={`${showPassword ? "password" : "text"}`}
              placeholder="Password"
              className="rounded p-2 focus:outline-none w-80"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {showPassword ? (
              <svg
                className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShowPass(!showPassword)}
              >
                <path d="M12 14.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z" />
                <path
                  fillRule="evenodd"
                  d="M.55 12C2.078 7.132 6.626 3.6 12 3.6s9.922 3.532 11.45 8.4c-1.528 4.868-6.076 8.4-11.45 8.4S2.078 16.868.55 12Zm16.25 0a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShowPass(!showPassword)}
              >
                <path
                  fillRule="evenodd"
                  d="M4.448 2.752a1.2 1.2 0 0 0-1.696 1.696l16.8 16.8a1.2 1.2 0 0 0 1.696-1.696l-1.767-1.768A12.018 12.018 0 0 0 23.45 12C21.92 7.132 17.373 3.6 12 3.6a11.95 11.95 0 0 0-5.414 1.289L4.45 2.752h-.002Zm5.114 5.112 1.816 1.818a2.404 2.404 0 0 1 2.94 2.94l1.817 1.816a4.8 4.8 0 0 0-6.573-6.573v-.001Z"
                  clipRule="evenodd"
                />
                <path d="M14.945 20.036 11.7 16.79a4.8 4.8 0 0 1-4.49-4.489L2.802 7.894A11.976 11.976 0 0 0 .55 12c1.528 4.868 6.078 8.4 11.45 8.4 1.016 0 2.003-.126 2.945-.364Z" />
              </svg>
            )}
          </div>

          <button
            type="submit"
            className="rounded bg-purple-600 transition ease-in-out hover:scale-110 duration-300 w-full px-5 py-3 text-white"
          >
            Login
          </button>
          <Link className="text-sm text-blue-700">Forgot Password?</Link>
        </form>
        <div className="flex items-center justify-between w-full my-6">
          <p className="text-sm">No account yet?</p>
          <button
            type="button"
            className="rounded-lg bg-white border transition ease-in-out hover:scale-105 duration-300 px-3 py-2"
          >
            <Link to="/register">Register</Link>
          </button>
        </div>
        <p className="text-sm">&copy; Trackmate. All Rights Reserved</p>
        <p className="text-sm">Version: 1.0.0</p>
      </div>
    </div>
  );
};

export default Login;

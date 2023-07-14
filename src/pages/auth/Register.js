import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, firstname, lastname);
  };

  return (
    <div className="bg-gray-100 md:bg-white h-screen flex items-center justify-center">
      <div className="px-14 md:bg-gray-100 flex flex-col items-center justify-center rounded-lg">
        <img alt="Trackmate Logo" className="my-10" />
        <form
          className="flex flex-col items-center justify-center space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            className="rounded p-2 focus:outline-none w-full"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            className="rounded p-2 focus:outline-none w-full"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="rounded p-2 focus:outline-none w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded p-2 focus:outline-none w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="rounded bg-purple-600 transition ease-in-out hover:scale-110 duration-300 w-full px-5 py-3 text-white"
          >
            Create Account
          </button>
          <p className="text-sm text-center">
            By signing up you agree to our{" "}
            <span>
              <Link to="/terms" className="text-blue-700">
                Terms of Service
              </Link>
            </span>{" "}
            and{" "}
            <span>
              <Link to="/privacy" className="text-blue-700">
                Privacy Policy
              </Link>
            </span>
          </p>
          <p className="text-sm">
            Having trouble?{" "}
            <span>
              <Link to="/terms" className="text-blue-700">
                We can help
              </Link>
            </span>
          </p>
        </form>
        <div className="flex items-center justify-between w-full my-6">
          <p className="text-sm">Already have an account?</p>
          <button
            type="button"
            className="rounded-lg bg-white border transition ease-in-out hover:scale-105 duration-300 px-5 py-2"
          >
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

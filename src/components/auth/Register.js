import React from "react";
import bg from "../../assets/Wavy_Tech-12_Single-11-removebg-preview.png";

const Register = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-full px-14">
          <h2 className="font-bold text-2xl text-[#195A76]">Register</h2>
          <p className="text-sm mt-4 text-[#195A76]">
            Create your account now
          </p>
          <form className="flex flex-col gap-4">
            <div className="flex justify-between gap-4">
                <input
                type="text"
                name="firstname"
                placeholder="Enter First Name"
                className="p-2 mt-8 rounded-xl border w-full"
                />
                <input
                type="text"
                name="lastname"
                placeholder="Enter First Name"
                className="p-2 mt-8 rounded-xl border w-full"
                />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Enter your Company Name"
              className="p-2 rounded-xl border"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your work Email"
              className="p-2 rounded-xl border"
            />
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="p-2 rounded-xl border w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <div className="flex justify-start items-center">
            <input type="checkbox" className="required:border-red-500 mr-2" />
            <p>Click to accept our Terms and conditions.</p>
            </div>
            <button className="bg-[#195A76] text-white py-2 rounded-xl hover:scale-105 duration-300">
              Register
            </button>
          </form>
          <div className="mt-3 text-sm flex justify-between items-center">
            <p>Already have an account?</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

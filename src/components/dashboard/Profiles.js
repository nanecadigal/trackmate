import React from "react";
import profile from "../../assets/icons8-person-64.png";

const Profiles = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <h1 className="text_logo text-xl text-[#195A76]">TrackMate</h1>
      <div className="flex items-center">
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8H16M8 12H13M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_429_11023)">
            <path
              d="M6 19V10C6 6.68629 8.68629 4 12 4V4C15.3137 4 18 6.68629 18 10V19M6 19H18M6 19H4M18 19H20"
              stroke="#292929"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 22L13 22"
              stroke="#292929"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="3" r="1" stroke="#292929" stroke-width="2.5" />
          </g>
          <defs>
            <clipPath id="clip0_429_11023">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <img
          src={profile}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full object-cover border-[#195A76] border-2 cursor-pointer"
          onClick={() => console.log("clicked")}
        />
      </div>
    </div>
  );
};

export default Profiles;

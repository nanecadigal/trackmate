import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import adminRoutes from "../adminRoutes";
import userRoutes from "../userRoutes";

import profileImg from "../assets/images/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528-removebg-preview.png";

const Sidebar = (props) => {
  const openSidebar = props.openSidebar;
  const isAdmin = true;

  const navLists = isAdmin ? adminRoutes : userRoutes;
  return (
    <>
      <div
        className={`${
          openSidebar ? "hidden" : ""
        } md:block w-3/4 md:w-72 h-screen border-r border-2 border-gray-100 fixed top-0 left-0 z-40 pt-20 bg-gray-100 md:bg-white`}
      >
        <div className="pt-4 px-8 flex flex-col gap-4">
          {isAdmin ? (
            <div className="flex flex-col items-center space-y-3">
              <img src={profileImg} alt="Profile" className="w-60" />
              <h1 className="text-lg">Admin</h1>
            </div>
          ) : null}
          <ul className="space-y-3">
            {navLists.map((itm, idx) => {
              return (
                <li
                  key={idx}
                  className="flex gap-2 rounded-lg hover:bg-purple-500 hover:text-white p-4"
                >
                  {itm.icon}
                  <NavLink to={itm.path}>{itm.name}</NavLink>
                </li>
              );
            })}
          </ul>
          {/* <p className="text-xs text-center">
          &copy; Trackmate. All Rights Reserved
        </p>
        <p className="text-xs text-center">Version: 1.1.1.1</p> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;

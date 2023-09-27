import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-2 container mx-auto ">
      <div className="flex justify-between items-center ">
        <img src="https://i.ibb.co/rZ6Ww8R/Logo.png" alt="" />
        <div className="">
            <ul className="flex gap-10 font-semibold ">
            <li>
              <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                  ? "pending"
                  : isActive
                  ? "text-red-500 underline"
                  : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                  ? "pending"
                    : isActive
                    ? "text-red-500 underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
            </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;

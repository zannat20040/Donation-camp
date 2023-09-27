import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div className="hero bg-base-200 navbarstyle">
        <div className=" mb-12 text-center container mx-auto flex flex-col">
          <div className="py-32">
            <h1 className="text-4xl font-bold mb-10">
              I Grow By Helping People In Need
            </h1>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs rounded-e-none rounded-r-none-none"
              />
              <button className="btn rounded-s-none bg-red-500 text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

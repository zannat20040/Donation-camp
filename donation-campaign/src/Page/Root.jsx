import React from "react";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="relative">
      <Navbar></Navbar>
      {/* <Header></Header> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Donation from "./Donation";
import Statistics from "./Statistics";
import Details from "./Details";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json")
      },
      {
        path: "/donation",
        element: <Donation></Donation>
        // loader: ()=>fetch('/donation.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/donation.json")
      },
    ],
  },
]);

export default Route;

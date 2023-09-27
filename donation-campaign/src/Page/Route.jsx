import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Donation from "./Donation";
import Statistics from "./Statistics";
import Details from "./Details";

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

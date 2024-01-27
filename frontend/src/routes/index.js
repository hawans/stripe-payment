import React from "react";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home" 
import Login from "../components/signin/login";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
  
      children: [
        {
          path: "team",
          element: <Home />,
        },
        ,
      ],
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
export default routes 


// https://reactrouter.com/en/main/routers/create-browser-router
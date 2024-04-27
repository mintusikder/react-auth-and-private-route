import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/root/Root";
import Home from "./assets/component/Home";
import Login from "./assets/component/Login";
import Register from "./assets/component/Register";
import AuthProvider from "./assets/authProvider/AuthProvider";
import Orders from "./assets/component/Orders";
import PrivateRoutes from "./routes/PrivateRoutes";
import Profile from "./assets/component/Profile";
import Dasbord from "./assets/component/Dasbord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/order",
        element: (
          <PrivateRoutes>
            {" "}
            <Orders></Orders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            {" "}
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            {" "}
           <Dasbord></Dasbord>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

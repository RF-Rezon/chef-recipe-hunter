import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Layouts/404Page";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import RegisterPage from "../Pages/Register Page/RegisterPage";
import LogInPage from "../Pages/Sign In Page/LogInPage";
import PrivateRoute from './../AuthProvider/PrivateRoute';
import ViewDetailsCard from "./../ViewDetailsCard/ViewDetailsCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ViewDetailsCard />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "login",
        element: <LogInPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;

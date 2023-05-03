import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'tw-elements';
import AuthProvider from "./AuthProvider/AuthProvider";
import router from "./Router/Router";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer/>
  </React.StrictMode>
);
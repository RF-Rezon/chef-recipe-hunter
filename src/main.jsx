import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";
import 'tw-elements';
import router from "./Router/Router";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
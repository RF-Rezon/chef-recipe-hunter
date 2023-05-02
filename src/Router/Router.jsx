import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Layouts/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
            path:"/",
            element: <Header/>
        }
      ]
    },
  ]);
  
export default router;
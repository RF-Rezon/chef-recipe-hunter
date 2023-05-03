import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import ErrorPage from '../Layouts/404Page';
import Home from '../Layouts/Home';
import ViewDetailsCard from '../ViewDetailsCard/ViewDetailsCard';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
            path:"/",
            element: <Header/>
        },
        {
            path:":id",
            element: <ViewDetailsCard/>,
            loader: ({params})=> fetch(`http://localhost:5000/${params.id}`)
        },
        {
            path:"blogs",
            element: <Blogs/>
        },
      ]
    },
    {
        path: "*",
        element: <ErrorPage/> 
    }
  ]);
  
export default router;
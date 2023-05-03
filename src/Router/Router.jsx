import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../Pages/Blogs/Blogs';
import ErrorPage from '../Layouts/404Page';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import RegisterPage from '../Pages/Register Page/RegisterPage';
import LogInPage from '../Pages/Sign In Page/LogInPage';
import ViewDetailsCard from './../ViewDetailsCard/ViewDetailsCard';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element: <Home/>
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
        {
            path:"login",
            element: <LogInPage/>
        },
        {
            path:"register",
            element: <RegisterPage/>
        },
      ]
    },
    {
        path: "*",
        element: <ErrorPage/> 
    }
  ]);
  
export default router;
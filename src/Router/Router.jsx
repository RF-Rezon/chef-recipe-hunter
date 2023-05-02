import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Layouts/Home';
import ViewDetailsCard from '../ViewDetailsCard/ViewDetailsCard';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      children:[
        {
            path:"/",
            element: <Header/>,
            loader: ()=> fetch("http://localhost:5000/all/")
        },
        {
            path:"/all/:id",
            element: <ViewDetailsCard/>,
            loader: ({params})=> fetch(`http://localhost:5000/all/${params.id}`)
        }
      ]
    },
  ]);
  
export default router;
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Utils/Footer/Footer';
import Navbar from '../Utils/NavBar/Navbar';


const Main = () => {
    const navigation =  useNavigation();
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <Navbar/>
            <div>{navigation.state === "loading" && "Loading"}</div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;
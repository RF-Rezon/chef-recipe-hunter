import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';

const Home = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;
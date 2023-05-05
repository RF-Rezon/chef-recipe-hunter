import React, { useContext } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Footer from '../Utils/Footer/Footer';
import Navbar from '../Utils/NavBar/Navbar';
import Spninner from '../Utils/spninner';


const Main = () => {
    const navigation =  useNavigation();
    const { loading } = useContext(AuthContext);
    if(loading){
        return (
            <Spninner/>
        )
    }
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
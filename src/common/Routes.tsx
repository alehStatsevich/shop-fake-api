import React from 'react';
import {Route, Routes} from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Forgot from "../components/Forgot";
import Contact from "../components/Contact";
import Product from "../components/Product";
import Error404 from "./404/Error404";





const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Route path="/" element={ <Navigate to="login" />} />*/}
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/forgot" element={ <Forgot/>}/>
                <Route path="/product" element={ <Product/>}/>
                <Route path= "/contact" element={ <Contact/>}/>

                <Route element={<Error404/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default Router;
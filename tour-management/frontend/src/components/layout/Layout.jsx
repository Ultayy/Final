import React from "react";
import Routers from "../../router/routers";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const Layout = () => {
    return (
        <>
        <Header/>
            <Routers/>
            <Footer/>
        </>
    );
};

export default Layout;
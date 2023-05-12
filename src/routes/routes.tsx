import React from "react";
import DashBoard from "../pages/DashBoard"
import About from "../pages/About";
import Services from "../pages/Services";
import Product from "../pages/Product";
import ContactUS from "../pages/ContactUS";

const routes: any = () =>
    [
        {
            path: "/",
            element: <DashBoard />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/services",
            element: <Services />,
        },
        {
            path: "/product",
            element: <Product />,
        },
        {
            path: "/contact-us",
            element: <ContactUS />,
        },

    ];

export default routes;

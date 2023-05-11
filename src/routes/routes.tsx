import React from "react";
import DashBoard from "../pages/DashBoard"
import About from "../pages/About";
import Services from "../pages/Services";
import Product from "../pages/Product";

const routes: any = () => 
[
  {
    path: "/",
    element: <DashBoard /> ,
  },
  {
    path: "/about",
    element: <About /> ,
  },
  {
    path: "/services",
    element: <Services /> ,
  },
  {
    path: "/product",
    element: <Product /> ,
  },

];

export default routes;

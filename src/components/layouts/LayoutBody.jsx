import React from "react";
import AppNav from "./AppNav.jsx";
import Footer from "./Footer.jsx";
import { Toaster } from 'react-hot-toast';

const LayoutBody = (props) => {
  return (
    <>
      <AppNav />
      {props.children}
      <Toaster position="top-right"/>
      <Footer />
    </>
  );
};

export default LayoutBody;

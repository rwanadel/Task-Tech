import React from "react";
import { useSelector } from "react-redux";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./layout.css";
const Layout = ({ children }) => {
  const userData = useSelector((state) => state.authReducer.userData);
  
  if (!userData?.token) {
    return children;
  }

  return (
    <div className="layout">
      <Navbar />
      <div className="child">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

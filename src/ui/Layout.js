import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="child">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

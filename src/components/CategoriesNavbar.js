import React from "react";

// Import styles
import "../styles/categories-navbar.css";

const CategoriesNavbar = () => {
  return (
    <div className="categories-navbar">
      <div className="container">
        <h3 className="title">All categories</h3>
        <ul className="categories-menu">
          <li>UI/ UX Design </li>
          <li>Web Developer</li>
          <li>Marketing</li>
          <li>App Developer</li>
          <li>Product Manager</li>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesNavbar;

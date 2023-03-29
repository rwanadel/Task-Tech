import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoriesNavbar from "../components/CategoriesNavbar";
import Filters from "../components/Filters";
import FreeLancers from "../components/FreeLancers";

// Import styles
import "../styles/services.css";
const Services = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="services">
      <CategoriesNavbar />
      <BreadCrumbs />
      <div className="container">
        <div
          className="filters-in-mobile"
          onClick={() => {
            setShowFilters(!showFilters);
          }}
        >
          Show filters &gt;
        </div>
        <div className="services-section">
          <Filters show={showFilters ? true : false} />
          <FreeLancers />
        </div>
      </div>
    </div>
  );
};

export default Services;

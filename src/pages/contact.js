import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoriesNavbar from "../components/CategoriesNavbar";
import Filters from "../components/Filters";
import FreeLancers from "../components/FreeLancers";

// Import styles
import "../styles/services.css";
import Layout from "../ui/Layout";
const Contact = () => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div><Layout>
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
    </Layout></div>
  );
};

export default Contact;

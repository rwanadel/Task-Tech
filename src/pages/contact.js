import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import CategoriesNavbar from "../components/CategoriesNavbar";
import Filters from "../components/Filters";
import FreeLancers from "../components/FreeLancers";

// Import styles
import "../styles/services.css";

import axios from "axios";
import Layout from "../ui/Layout";
const Contact = () => {

  const [topusers,settopuser]=useState([])
  //get top users in highest reated freelancer
 const topuser=async()=>{
    const res = await axios.get("https://task-teck.onrender.com/api/v1/users/topuser")
    //console.log(res.data.data.users)
    settopuser(res.data.data.users)
    console.log(res.data.data.users)
    }
    useEffect(()=>{
      topuser()
      console.log(topusers)
    },[])



  const [showFilters, setShowFilters] = useState(false);
  return (
    <div>
    <Layout>
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
          <FreeLancers topusers={topusers} />
        </div>
      </div>
    </div>
    </Layout>
   </div>
  );
};

export default Contact;

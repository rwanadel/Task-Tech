import React, { useEffect, useState } from "react";
import "../styles/freelancer-card.css";
import User from "../assets/user.jpg";
import { AiFillStar } from "react-icons/ai";
import baseUrl from "../Api/baseURL"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import gettopusersaction from "../redux/actions/topusersAction"
import { FaRegUserCircle } from "react-icons/fa";



const FreelancerCard = ({img,title2,job,rate,reve,skill1,skill2,skill3}) => { 

  const[imge,setimge]=useState("");
  return (
    <div className="freelancer-card">
      <div className="freelancer-photo">
      <img  src={img}  alt={""}/>
      
       
      </div>
      <div className="freelancer-data">
        <h3 className="freelancer-name">{title2}</h3>
        <span className="freelancer-job">{job}</span>
        <div className="freelancer-rates">
          <AiFillStar />
          <span>{rate}</span>
          <span className="reve">({reve})reviews</span>
        </div>
      </div>
      <ul className="freelancer-skills">
        <li>{skill1}</li>
        <li>{skill2}</li>
        <li>{skill3}</li>
      </ul>

      <button>View profile</button>
    </div>
  );
};

export default FreelancerCard;

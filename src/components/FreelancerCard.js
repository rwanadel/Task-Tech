import React from "react";
import "../styles/freelancer-card.css";
import User from "../assets/user.jpg";
import { AiFillStar } from "react-icons/ai";

const FreelancerCard = ({u}) => {

  
  return (
    <div className="freelancer-card">
      <div className="freelancer-photo">
        <img src={User} alt="freelancer-name" />
      </div>
      <div className="freelancer-data">
        <h3 className="freelancer-name">Ahmed Ali</h3>
        <span className="freelancer-job">UX Researcher</span>
        <div className="freelancer-rates">
          <AiFillStar />
          <span>5.4</span>
          <p>(489 Reviews)</p>
        </div>
      </div>
      <ul className="freelancer-skills">
        <li>Figma</li>
        <li>Html</li>
        <li>Css</li>
      </ul>

      <button>View profile</button>
    </div>
  );
};

export default FreelancerCard;

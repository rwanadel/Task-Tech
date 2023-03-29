import React from "react";
import "../styles/freelancer-card.css";
import User from "../assets/user.jpg";
import { AiFillStar } from "react-icons/ai";
const FreelancerCard = () => {
  return (
    <div className="freelancer-card">
      <div className="freelancer-photo">
        <img src={User} alt="freelancer-name" />
      </div>
      <div className="freelancer-data">
        <h3 className="freelancer-name">Kristin Waston</h3>
        <span className="freelancer-job">UX Researcher</span>
        <div className="freelancer-rates">
          <AiFillStar />
          <span>4.9</span>
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

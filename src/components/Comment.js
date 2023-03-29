import React from "react";
import Rating from "@mui/material/Rating";
import User from "../assets/user.jpg";
import { Link } from "react-router-dom";
const Comment = () => {
  return (
    <Link to="/offer-details" className="comment">
      <div className="comment-main">
        <div className="comment-image">
          <img src={User} alt="username" />
        </div>
        <div className="comment-body">
          <h3 className="username">Steven</h3>
          <Rating name="read-only" value={3} readOnly />
          <p className="comment-text">
            I will design a beautiful website for your business, I will help you
            .
          </p>
        </div>
      </div>
      <div className="comment-date">June 15, 11:30 AM</div>
    </Link>
  );
};

export default Comment;

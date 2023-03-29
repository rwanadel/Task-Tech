import React from "react";

import User from "../assets/user.jpg";
import "../styles/comments-section.css";
import Comment from "./Comment";

const CommentsSection = () => {
  return (
    <div className="comments-section">
      <div className="title">Comments</div>
      <div className="comments-container">
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div className="add-comment">
        <div className="comment-form">
          <div className="user-image">
            <img src={User} alt="username" />
          </div>
          <textarea placeholder="Add your comment.."></textarea>
        </div>
        <button>Post</button>
      </div>
    </div>
  );
};

export default CommentsSection;

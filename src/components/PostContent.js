import React from "react";
import PostImage from "../assets/thumbnail.jpg";
import "../styles/post-content.css";
const PostContent = () => {
  return (
    <div className="post-content">
      <div className="post-image">
        <img src={PostImage} alt="postImage" />
      </div>

      <div className="post-data">
        <div className="post-body">
          <div className="post-text">
            <h3 className="post-title">
              Need someone help me to deisgn modern websites in figma or
              adobeXD.
            </h3>
            <p className="post-description">
              I'm looking for a UI/UX Designer, Gathering user requirements,
              building navigation components. I don't care how many projects you
              worked on, I look for quality.
            </p>
          </div>
          <span className="post-budget">$200</span>
        </div>
        <div className="post-delievery">
          <div className="delievery-info">
            <h3>Delievery Time</h3>
            <span>14 Days</span>
          </div>
          <span className="post-date">Tue. 20 Nov, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default PostContent;

import React from "react";
import CommentsSection from "../components/CommentsSection";
import PostContent from "../components/PostContent";

// Import styles
import "../styles/post-details.css";
const PostDetails = () => {
  return (
    <div className="post-details">
      <div className="container">
        <PostContent />
        <CommentsSection />
      </div>
    </div>
  );
};

export default PostDetails;

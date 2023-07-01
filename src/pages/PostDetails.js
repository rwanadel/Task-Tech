import React from "react";
import CommentsSection from "../components/CommentsSection";
import PostContent from "../components/PostContent";

// Import styles
import "../styles/post-details.css";
import Layout from "../ui/Layout";

const PostDetails = () => {
  return (
    <div>
    <Layout>
    <div className="post-details">
      <div className="container">
        <PostContent />
        <CommentsSection />
      </div>
    </div>
    </Layout>
    </div>
  );
};

export default PostDetails;

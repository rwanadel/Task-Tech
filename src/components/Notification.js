import React from "react";

// Import assetes
import User from "../assets/user.jpg";
import Post from "../assets/post.jpg";

// Import styles
import "../styles/notification.css";

const Notification = ({ type, message }) => {
  return (
    <div className="notification">
      <div className="main-data">
        <div className="user-image">
          <img src={User} alt="username" />
        </div>
        <div className="notification-body">
          <div className="notification-message">
            <div className="notification-message-body">
              <div className="notification-user-name">Steven Rose</div>{" "}
              {message}
            </div>
          </div>
          <div className="notification-time">1 hour ago</div>
        </div>
      </div>
      <div className="notification-ultra-data">
        {type === "normal" && (
          <div className="notification-image">
            <img src={Post} alt="post" />
          </div>
        )}
        {type === "request" && (
          <div className="request-options">
            <button className="primary btn">Accept</button>
            <button className="outline btn">Decline</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;

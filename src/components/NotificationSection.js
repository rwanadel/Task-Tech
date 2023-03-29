import React from "react";
import Notification from "./Notification";

// Import icons from 'react-icons' library
import { RiCheckDoubleFill } from "react-icons/ri";
const NotificationSection = ({ time, notifications }) => {
  return (
    <div className="notifications-section">
      <div className="notifications-head">
        <div className="left">
          <div className="time">{time}</div>
        </div>

        <div className="right">
          <div className="read-all">
            <RiCheckDoubleFill />
            Mark as read
          </div>
          <div className="clear-all">Clear all</div>
        </div>
      </div>
      <div className="notifications-container">
        {notifications.map((notify, index) => {
          return (
            <Notification
              key={index}
              type={notify.type}
              message={notify.message}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NotificationSection;

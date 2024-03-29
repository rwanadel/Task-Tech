import React from "react";

// Import Components
import NotificationSection from "../components/NotificationSection";

// Import styles
import "../styles/notifications.css";
import Layout from "../ui/Layout";


const Notifications = () => {
  return (
    <div>
    <Layout>
    <div className="notifications">
      <div className="container">
        <h2 className="page-title">Notifications</h2>
        <NotificationSection
          time="Today"
          notifications={[
            { type: "normal", message: "Commented on your post." },
            { type: "request", message: "Send to you a friend request." },
          ]}
        />
        <NotificationSection
          time="Yesterday"
          notifications={[
            { type: "request", message: "Send to you a friend request." },
            { type: "normal", message: "Commented on your post." },
          ]}
        />
      </div>
    </div>
    </Layout>
    </div>
  );
};

export default Notifications;

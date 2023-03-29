import React from "react";

// Import assets
import User from "../assets/user.jpg";

// Import icons from 'react-icons' library
import { RiAttachment2, RiSendPlane2Fill, RiCloseLine } from "react-icons/ri";
// Import styles
import "../styles/chat.css";
import ChatMessage from "./ChatMessage";
const Chat = ({ active, onClick }) => {
  return (
    <div className={`chat ${active ? "active" : ""}`}>
      <div className="chat-header">
        <div className="chat-user-img">
          <img src={User} alt="username" />
          <span></span>
        </div>
        <div className="chat-body">
          <h3 className="chat-username">Kristin Waston</h3>
          <span className="user-status">Online</span>
        </div>
        <div className="close-chat" onClick={onClick}>
          <RiCloseLine />
        </div>
      </div>
      <div className="chat-container">
        <span className="day">Today</span>
        <ChatMessage
          type="receiver"
          status="seen"
          text="Hi Emily, any progress on the project? We need a link for standup."
        />
        <ChatMessage
          type="sender"
          status="seen"
          text="Hi Kristin! Yes, I just finished developing the chat."
        />
        <ChatMessage
          type="sender"
          status="seen"
          text="Work with talented people at the most affordable price to get the most out of your time and cost . "
        />
        <ChatMessage
          type="receiver"
          status="seen"
          text="Hi Emily, any progress on the project? We need a link for standup."
        />
        <ChatMessage
          type="sender"
          status="seen"
          text="Work with talented people at the most affordable price to get the most out of your time and cost . "
        />
      </div>
      <div className="chat-typing">
        <RiAttachment2 className="attach-icon" />
        <input type="text" placeholder="Enter your message.." />
        <div className="send-icon">
          <RiSendPlane2Fill />
        </div>
      </div>
    </div>
  );
};

export default Chat;

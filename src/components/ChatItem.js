import React from "react";

// Import assets
import User from "../assets/user.jpg";

// Import icons from 'react-icons'
import { BsCheckAll } from "react-icons/bs";

// Import styles
import "../styles/chat-item.css";
const ChatItem = ({ type, status, msgs_number, onClick }) => {
  return (
    <div className="chat-item" onClick={onClick}>
      <div className="chat-item-img">
        <img src={User} alt="username" />
      </div>
      <div className="chat-item-body">
        <h3 className="chat-item-username">Kristin Waston</h3>
        <p
          className={`chat-item-text ${
            type === "receive" && status === "unseen" && "unseen"
          }`}
        >
          {type === "send" && "You: "}Yes, the work is all done
        </p>
      </div>
      <div className="chat-item-status">
        <span className="chat-item-time">12:30</span>
        {type === "receive" && (
          <div className="messages-number">{msgs_number}</div>
        )}
        {type === "send" ? (
          status === "seen" ? (
            <div className="chat-item-state seen">
              <BsCheckAll />
            </div>
          ) : (
            <div className="chat-item-state">
              <BsCheckAll />
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ChatItem;

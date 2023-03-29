import React from "react";

// Import icons from 'react-icons' library
import { BsCheckAll } from "react-icons/bs";

// Import styles
import "../styles/chat-message.css";

const ChatMessage = ({ type, status, text }) => {
  return (
    <div className={`message ${type === "sender" && "sender"} `}>
      {text}
      <span className="message-time">1 day ago</span>
      {type === "sender" ? (
        status === "seen" ? (
          <div className="message-state seen">
            <BsCheckAll />
          </div>
        ) : (
          <div className="message-state">
            <BsCheckAll />
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatMessage;

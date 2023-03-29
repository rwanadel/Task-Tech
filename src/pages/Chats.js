import React, { useState } from "react";

// Import styles
import "../styles/chats.css";

// Import icons from 'react-icons' library
import { RiSearchLine, RiListSettingsLine } from "react-icons/ri";
import { CgMathPlus } from "react-icons/cg";
import ChatItem from "../components/ChatItem";
import Chat from "../components/Chat";

const Chats = () => {
  const [listActive, setListActive] = useState(true);
  return (
    <div className="chats">
      <div className="container">
        <div className={`chats-menu ${listActive ? "active" : ""}`}>
          <div className="chats-search">
            <RiSearchLine className="search-icon" />
            <input type="text" placeholder="Search message.." />
            <RiListSettingsLine className="config-icon" />
          </div>
          <div className="chats-header">
            <div className="chats-number">Chats (2)</div>
            <div className="add-chat">
              Add new
              <div className="add-icon">
                <CgMathPlus />
              </div>
            </div>
          </div>
          <div className="chats-list">
            <ChatItem
              onClick={() => {
                setListActive(false);
              }}
            />
            <ChatItem
              type="send"
              status="unseen"
              msgs_number={0}
              onClick={() => {
                setListActive(false);
              }}
            />
            <ChatItem
              type="receive"
              status="unseen"
              msgs_number={2}
              onClick={() => {
                setListActive(false);
              }}
            />
            <ChatItem
              type="send"
              status="seen"
              msgs_number={0}
              onClick={() => {
                setListActive(false);
              }}
            />
            <ChatItem
              type="send"
              status="seen"
              msgs_number={0}
              onClick={() => {
                setListActive(false);
              }}
            />
            <ChatItem
              type="send"
              status="seen"
              msgs_number={0}
              onClick={() => {
                setListActive(false);
              }}
            />
            <ChatItem
              type="send"
              status="seen"
              msgs_number={0}
              onClick={() => {
                setListActive(false);
              }}
            />
            <ChatItem
              onClick={() => {
                setListActive(false);
              }}
            />
          </div>
        </div>
        <Chat
          active={!listActive ? true : false}
          onClick={() => {
            setListActive(true);
          }}
        />
      </div>
    </div>
  );
};

export default Chats;

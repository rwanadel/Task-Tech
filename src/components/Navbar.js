import React, { useState } from "react";

import { Link } from "react-router-dom";

// Import icons from 'react-icons' library
import { RiChat3Line, RiNotification4Line, RiMenu3Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

// Import Assets
import Logo from "../assets/logo.png";
import UserImg from "../assets/user.jpg";

// Import styling
import "../styles/navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="container">

        <div className="img">
        <Link to="/" className="logo">
          <img  src={Logo} alt="task-tech" />
        </Link>
        </div>
        <ul  className= {`navigators ${showMenu ? "show" : ""}`}>

          <li onClick={() => setShowMenu(false)}>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => setShowMenu(false)}>About</li>
          <li onClick={() => setShowMenu(false)}>Services</li>
          <li onClick={() => setShowMenu(false)}>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          

          <li className="mobile" onClick={() => setShowMenu(false)}>
            <Link to="/chats">
              <RiChat3Line />
              <span>Chats</span>
            </Link>
          </li>
          <li className="mobile" onClick={() => setShowMenu(false)}>
            <Link to="/notifications">
              <RiNotification4Line />
              <span>Notifications</span>
            </Link>
          </li>

          


          <li className="mobile" onClick={() => setShowMenu(false)}>
            <CgProfile />
            <span>Profile</span>
          </li>
          <li onClick={() => setShowMenu(false)}><Link to="/PostTask"><button className="btn-to-post-task">Post a task</button></Link></li>
        </ul>

        <div className="user-data">
          <Link to="/chats" className="data-peice">
            <RiChat3Line />
            <span className="badge">5</span>
          </Link>
          <Link to="/notifications" className="data-peice">
            <RiNotification4Line />
            <span className="badge">2</span>
          </Link>

          

          <div className="user-profile">
            <Link to="/viewprofile/:id"><img src={UserImg} alt="username" /></Link>
          </div>
          
        </div>
        <div className="toggle-icon" onClick={() => setShowMenu(!showMenu)}>
          <RiMenu3Fill />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;

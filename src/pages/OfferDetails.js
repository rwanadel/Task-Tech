import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../styles/offer-details.css";
import User from "../assets/user.jpg";
import Post from "../assets/thumbnail.jpg";
import { Link } from "react-router-dom";
const OfferDetails = () => {
  return (
    <div className="offer-details">
      <div className="container">
        <div className="offer-comment">
          <div className="offer-comment-details">
            <div className="offer-comment-details-title">
              I will build a fully app & web design{" "}
            </div>
            <div className="offer-comment-user-details">
              <div className="offer-comment-user-details-basic">
                <div className="offer-comment-user-image">
                  <img src={User} alt="username" />
                </div>
                <h3 className="offer-comment-username">Kristin Waston</h3>
              </div>
              <div className="offer-comment-user-details-advanced">
                <AiFillStar />
                <span>5.0</span>
                <p>(150 reviews)</p>
              </div>
            </div>
          </div>
          <div className="offer-comment-image">
            <img src={Post} alt="post" />
          </div>
        </div>
        <div className="about-seller">
          <div className="text-info">
            <div className="seller-description">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. In lacus massa ac quis
                pellentesque. Non vestibulum arcu viverra et risus vitae.
                Feugiat malesuada accumsan facilisis nisi urna fames.
              </p>
            </div>
            <div className="seller-services">
              <h4>Services I Provide:</h4>
              <ul>
                {["Web Design", "App Design", "Wireframing", "Prototype"].map(
                  (el, index) => {
                    return (
                      <li>
                        {index + 1}) {el}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div className="seller-extra-data">
              <div className="extra-info">
                <h4>Category</h4>
                <ul>
                  <li>Graphic & Design</li>
                  <li>UI/ UX Design</li>
                </ul>
              </div>
              <div className="extra-info">
                <h4>Software Tools</h4>
                <ul>
                  <li>Figma</li>
                  <li>AdobeXD</li>
                </ul>
              </div>
              <div className="extra-info">
                <h4>Delivery Date</h4>
                <ul>
                  <li>14 Days</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="seller-card">
            <div className="card-header">
              <h4>About the seller</h4>
              <span></span>
            </div>

            <div className="seller-card-contact-info">
              <div className="seller-card-user-image">
                <img src={User} alt="username" />
              </div>
              <h4>Kristin Waston</h4>
              <span>UX Researcher</span>
              <div className="seller-card-user-rate">
                <AiFillStar />
                <span>5.0</span>
                <p>(150 reviews)</p>
              </div>
            </div>
            <button>Contact me</button>
          </div>
        </div>
        <Link to="/payment">
          <button className="continue-btn">Continue ($200)</button>
        </Link>
      </div>
    </div>
  );
};

export default OfferDetails;

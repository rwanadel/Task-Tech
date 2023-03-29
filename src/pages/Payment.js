import React from "react";
import { AiFillStar } from "react-icons/ai";
import User from "../assets/user.jpg";
import Post from "../assets/thumbnail.jpg";
import "../styles/payment.css";

import { BsCreditCard2Front } from "react-icons/bs";
import { FaCcPaypal } from "react-icons/fa";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Payment = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="payment-offer">
          <div className="payment-offer-details">
            <div className="payment-offer-details-title">
              I will build a fully app & web design
            </div>
            <div className="payment-offer-user-details">
              <div className="payment-offer-user-details-basic">
                <div className="payment-offer-user-image">
                  <img src={User} alt="username" />
                </div>
                <h3 className="payment-offer-username">Kristin Waston</h3>
              </div>
              <div className="payment-offer-user-details-advanced">
                <AiFillStar />
                <span>5.0</span>
                <p>(150 reviews)</p>
              </div>
            </div>
          </div>
          <div className="payment-budget">$200</div>
          <div className="payment-offer-image">
            <img src={Post} alt="post" />
          </div>
        </div>
        <div className="payment-information">
          <div className="payment-proccess">
            <div className="payment-method">
              <h4>Add payment method</h4>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="credit"
                    control={<Radio />}
                    label={
                      <span className="method">
                        <BsCreditCard2Front /> Credit or Debit Card
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label={
                      <span className="method">
                        <FaCcPaypal /> PayPal
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>

              <span className="separator"></span>
            </div>
            <div className="card-information">
              <h4>Add new card</h4>
              <form className="payment-form">
                <input
                  className="payment-input"
                  type="text"
                  placeholder="Card number"
                />
                <input
                  className="payment-input"
                  type="text"
                  placeholder="Card holder name"
                />
                <div className="card-extra-data">
                  <div className="extra">
                    <h3>Expiration Date</h3>

                    <input
                      className="payment-input"
                      type="text"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div className="extra">
                    <h3>CVV</h3>

                    <input className="payment-input" type="text" />
                  </div>
                </div>
                <button type="submit">Pay now</button>
              </form>
            </div>
          </div>
          <div className="payment-summary">
            <div className="summary-details">
              <div className="backage">
                <h3>6 Pages Design Package </h3>
                <span>$200</span>
              </div>
              <p className="separator"></p>
              <div className="delivery-info">
                <div className="info">
                  <span>Delivery days</span>
                  <p>14 Days</p>
                </div>
                <div className="info">
                  <span>Service</span>
                  <p>$50</p>
                </div>
              </div>
            </div>
            <div className="summary-total">
              <span className="separator"></span>
              <div className="summary-total-data">
                <div className="total-data">
                  <span>Total</span>
                  <p>$250</p>
                </div>
                <div className="total-data">
                  <span>Delivery date</span>
                  <p>Mon.25 Nov, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";

import logo from "../assets/logo.png";
import Fpassword from "../assets/ForgotPassword.png";
import "../styles/ForgotPassword.css";
import { Link } from "react-router-dom";
// import { isValidEmail } from '../Api/helpers';
const ForgotPassword = () => {
  return (
    <Container>
      <Row>
        <Col sm="12">
          <div className="logo-signUp">
            <img src={logo} alt="logo" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="6">
          <div>
            <img
              src={Fpassword}
              alt="Forgot Password"
              style={{ width: "30rem" }}
            />
          </div>
        </Col>
        <Col sm="6" style={{ marginTop: "5rem" }}>
          <div className="text1">
            <h3>Forgot Password</h3>
          </div>
          <div className="text2">
            The verification code will be sent to your <br />
            E-mail, please check it .
          </div>
          <div
            style={{ width: "20rem", marginLeft: "1rem", marginTop: "5rem" }}
          >
            <TextField
              style={{ width: "25rem" }}
              id="outlined-helperText"
              label="E-mail"
            />
            <Link to={"/verify"}>
              <button className="btn1">Send Code </button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;

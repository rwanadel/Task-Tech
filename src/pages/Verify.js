import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import verify from "../assets/Authentication.png";
import "../styles/Verify.css";
import { CustomSnackbar } from "../components/customSnackbar";
import { insertData } from "../Hook/useInsertData";
import LoaderComponents from "../components/LoaderComponents";
const Verify = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const [isloading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const halndleVerify = async () => {
    try {
      const { input1, input2, input3, input4 } = values;
      setIsLoading(true);
      const response = await insertData("users/verifyresetcode", {
        resetCode: `${input1}${input2}${input3}${input4}`,
      });
      setIsLoading(false);
      navigate('/reset')
    } catch (e) {
      setIsLoading(false);
      setErrorMessage(
        e?.response?.data?.message ?? "Error, Please try again later"
      );
    }
  };

  const handleSubmit = () => {
    if (
      values.input1.length > 0 &&
      values.input2.length > 0 &&
      values.input3.length > 0 &&
      values.input4.length > 0
    ) {
      // talk to back end
      halndleVerify();
    } else {
      setErrorMessage("All Fields are required");
    }
  };

  return (
    <Container>
      <CustomSnackbar
        message={errorMessage}
        handleClose={() => {
          setErrorMessage("");
        }}
      />
      <LoaderComponents open={isloading} />
      <Row>
        <Col sm="12" className="logo-verify">
          <img src={logo} alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <img src={verify} alt="verify" style={{ width: "30rem" }} />
        </Col>
        <Col sm="6">
          <div className="text1">
            <h3>Verification Code</h3>
          </div>
          <div className="text2">
            Enter the verification code we just sent you on <br /> your email
            adress .
          </div>
          <div>
            <input
              type="text"
              maxLength={1}
              value={values.input1}
              onChange={(e) => {
                handleChange("input1", e.target.value);
              }}
              className="input-verity"
            />
            <input
              type="text"
              value={values.input2}
              onChange={(e) => {
                handleChange("input2", e.target.value);
              }}
              maxLength={1}
              className="input-verity"
            />
            <input
              type="text"
              value={values.input3}
              onChange={(e) => {
                handleChange("input3", e.target.value);
              }}
              maxLength={1}
              className="input-verity"
            />
            <input
              type="text"
              value={values.input4}
              onChange={(e) => {
                handleChange("input4", e.target.value);
              }}
              maxLength={1}
              className="input-verity"
            />
          </div>

          <div>
            <button className="btn1-Verity" onClick={handleSubmit}>
              Verity
            </button>
          </div>
          <div>
            <label className="trans-Verify">
              Don’t recieve a code ?
              <Link
                to="/Reset"
                style={{
                  textDecoration: "none",
                  marginLeft: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    color: " rgb(22, 80, 105)",
                    fontSize: "18v px",
                  }}
                >
                  Resend
                </span>
              </Link>
            </label>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Verify;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import { connect } from "react-redux";

import signUp from "../assets/sign.png";
import logo from "../assets/logo.png";
import Google from "../assets/Google.png";
import facebook from "../assets/Vector.png";
import { isValidEmail } from "../Api/helpers";
import SignInHook from "../Hooks/SignIn-Hook";
import LoaderComponents from "../components/LoaderComponents";
import { CustomPassword } from "../components/Password";
import "../styles/signIn.css";
import { CustomSnackbar } from "../components/customSnackbar";
import { CLEAR_MESSAGES } from "../redux/type";

const SignIn = ({ authReducer, dispatch }) => {
  const { errorMessage } = authReducer

  const {
    showErrors,
    email,
    password,
    isLoading,
    OnchangeEmail,
    OnchangePassword,
    OnSubmit,
  } = SignInHook();

  return (
    <div>
      <CustomSnackbar
        message={errorMessage}
        handleClose={() => {
          dispatch({
            type: CLEAR_MESSAGES,
          });
        }}
      />
      <LoaderComponents open={isLoading} />
      <Container>
        <Row>
          <Col sm="12">
            <div className="logo-signUp">
              <img src={logo} alt="logo" />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm="6">
            <div className="signUp">
              <img src={signUp} alt="signUp" style={{ width: "30rem" }} />
            </div>
          </Col>
          <Col sm="6">
            <div className="text1">
              <h3>Welcome Back,</h3>
            </div>
            <div className="text2">Please login to continue ..</div>
            <div style={{ width: "20rem", marginLeft: "1rem" }}>
              {/* <input className="data" type="text" placeholder="Email" /><br /> */}
              <FormControl
                sx={{ m: 1 }}
                fullWidth
                variant="standard"
                error={showErrors && !isValidEmail(email)}
              >
                <TextField
                  error={showErrors && !isValidEmail(email)}
                  value={email}
                  onChange={OnchangeEmail}
                  id="standard-error"
                  label="E-mail"
                  variant="standard"
                />
                <FormHelperText>
                  {showErrors &&
                    !isValidEmail(email) &&
                    "This email is unvalid"}
                </FormHelperText>
              </FormControl>
              {/* <input className="data" type="password" placeholder="password" /><br />
                            <i class='bx bx-hide eye-icon'></i> */}

              <CustomPassword
                isError={showErrors && password.length < 7}
                value={password}
                onchange={OnchangePassword}
                labelName={"Password"}
                errorMessage={"Password length should be longer than 7"}
              />
              <div className="fpassword-wrapper">
                <span style={{ display: "flex", alignItems: 'center' }}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="Remember me"
                  />
                  <label htmlFor="Remember me" className="Remenber">
                    {" "}
                    Remember me
                  </label>
                </span>

                <span style={{ display: "flex", alignItems: 'center' }}>
                  <Link
                    to="/Fpassword"
                    style={{ textDecoration: "none", marginLeft: "0.5rem" }}
                    className="fpassword"
                  >
                    forgot password ?
                  </Link>
                </span>
              </div>

              <br />
              <button onClick={OnSubmit} className="btn2">
                sign in{" "}
              </button>
            </div>
            <div className="line"></div>

            <div className="media-options">
              <Link href="#">
                <img src={Google} alt="Google " className="google" />
              </Link>
            </div>
            <div className="media-options">
              <Link href="#">
                <img src={facebook} alt="facebook" className="facebook" />
              </Link>
            </div>

            <label className="trans">
              Already Have an account ?
              <Link
                to="/signUp"
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
                  sign Up
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});
export default connect(mapStateToProps)(SignIn);


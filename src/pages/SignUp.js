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
import SignUpHook from "../Hooks/SignUp-Hook";
import { isValidEmail } from "../Api/helpers";
import LoaderComponents from "../components/LoaderComponents";
import { CustomSnackbar } from "../components/customSnackbar";
import { CLEAR_MESSAGES } from "../redux/type";
import { CustomPassword } from "../components/Password";
import "../styles/signUp.css";

const SignUp = ({ authReducer, dispatch }) => {
  const {
    name,
    email,
    password,
    confirmPassword,
    onChange,
    OnSubmit,
    showErrors,
    loading,
  } = SignUpHook();
  const { errorMessage } = authReducer;

  return (
    <Container>
      <LoaderComponents open={loading} />
      <CustomSnackbar
        message={errorMessage}
        handleClose={() => {
          dispatch({
            type: CLEAR_MESSAGES,
          });
        }}
      />
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
            <h3>Create an account,</h3>
          </div>
          <div className="text222">Let’s create account together</div>
          <div style={{ width: "20rem", marginLeft: "1rem" }}>
            <FormControl
              sx={{ m: 1 }}
              fullWidth
              variant="standard"
              error={showErrors && name.length === 0}
            >
              <TextField
                error={showErrors && name.length === 0}
                value={name}
                onChange={(e) => {
                  onChange("name", e);
                }}
                id="standard-error"
                label="Full Name"
                variant="standard"
              />
              <FormHelperText>
                {showErrors && name.length === 0 && "Please Enter Full Name"}
              </FormHelperText>
            </FormControl>
            {/* <input value={email} onChange={OnchangeEmail} className="data" type="text" placeholder="Email" /><br /> */}
            <FormControl
              sx={{ m: 1 }}
              fullWidth
              variant="standard"
              error={showErrors && !isValidEmail(email)}
            >
              <TextField
                error={showErrors && !isValidEmail(email)}
                value={email}
                onChange={(e) => {
                  onChange("email", e);
                }}
                id="standard-error"
                label="E-mail"
                variant="standard"
              />
              <FormHelperText>
                {showErrors && !isValidEmail(email) && "This email is unvalid"}
              </FormHelperText>
            </FormControl>

            {/* <input value={password} onChange={OnchangePassword} className="data" type="password" placeholder="password" /><br />
              <i className='bx bx-hide eye-icon'></i> */}
            <CustomPassword
              isError={showErrors && password.length < 7}
              onchange={(e) => {
                onChange("password", e);
              }}
              value={password}
              labelName='Password'
              errorMessage={'Password length should be longer than 7'}
            />
            <CustomPassword
              isError={showErrors && (password!==confirmPassword || confirmPassword.length === 0)}
              onchange={(e) => {
                onChange("confirmPassword", e);
              }}
              value={confirmPassword}
              labelName='Confirm Password'
              errorMessage={'Confirm password is in '}
            />
            {/* <input value={confirmPassword} onChange={OnchangeConfirmPassword} className="data" type="password" placeholder="confirm password" /><br />
              <i className='bx bx-hide eye-icon2'></i> */}
            <Link to="/createprofile3">
            <button onClick={OnSubmit} className="btn-signup">
              sign Up{" "}
            </button>
            </Link>
          </div>
          <div className="line"></div>
        </Col>
      </Row>
      <Row>
        <Col sm="6"></Col>
        <Col sm="6">
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
        </Col>
      </Row>
      <Row>
        <Col sm="6"></Col>
        <Col sm="6">
          <label className="trans">
            Already Have an account ?
            <Link
              to="/signIn"
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
                sign in
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(SignUp);

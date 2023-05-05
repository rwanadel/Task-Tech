import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";


import logo from "../assets/logo.png";
import Fpassword from "../assets/ForgotPassword.png";
import "../styles/ForgotPassword.css";
import { isValidEmail } from "../Api/helpers";
import { insertData } from "../Hook/useInsertData";
import LoaderComponents from "../components/LoaderComponents";
import { CustomSnackbar } from "../components/customSnackbar";


// import { isValidEmail } from '../Api/helpers';
const ForgotPassword = () => {
  const [ showErrors, setShowErrors ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('')

  const navigate = useNavigate();

  const handleForgetPassword = async () => {
    try {
      setLoading(true)
      const response = await insertData('users/forgetpassword', {email})
      navigate('/verify')
    } catch (e) {
      setLoading(false)
      setErrorMessage(e?.response?.data?.message ?? 'Error, please try again later')
    }
  }
  
  const onBtnClick = () => {
    if(isValidEmail(email)){
      //call back-end
      // navigate('/verify')
      handleForgetPassword()
    } else {
      setShowErrors(true)
    }
  }

  return (
    <Container>
      <LoaderComponents open={loading} />
      <CustomSnackbar
        message={errorMessage}
        handleClose={() => {
          setErrorMessage('')
        }}
      />
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
            style={{ width: "25rem", marginLeft: "1rem", marginTop: "5rem" }}
          >
            {/* <TextField
              style={{ width: "25rem" }}
              id="outlined-helperText"
              label="E-mail"
            /> */}
            <FormControl
                sx={{ m: 1 }}
                fullWidth
                variant="outlined"
                error={showErrors && !isValidEmail(email)}
              >
                <TextField
                  error={showErrors && !isValidEmail(email)}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  id="outlined-error"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                />
                <FormHelperText>
                  {showErrors &&
                    !isValidEmail(email) &&
                    "This email is unvalid"}
                </FormHelperText>
              </FormControl>
              <button onClick={onBtnClick} className="btn1">Send Code </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;

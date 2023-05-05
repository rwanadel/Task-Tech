import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

import logo from "../assets/logo.png";
import Rpassword from "../assets/Rpassword.png";
import "../styles/ResetPasssword.css";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col sm="12" className="logo-Reset">
          <img src={logo} alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <img src={Rpassword} alt="ResetPassword" style={{ width: "29rem" }} />
        </Col>
        <Col sm="6" style={{ marginTop: "-50px" }}>
          <div className="text1-Reset">
            <h3>Reset Password</h3>
          </div>
          <div className="text2-Reset">
            Your new password must be different from the password you used
            previously
          </div>
          <div style={{ width: "20rem", marginLeft: "1rem" }}>
            <TextField
              style={{
                width: "25rem",
                marginBottom: "30px",
                background: "#F5F5F5",
              }}
              id="outlined-helperText"
              label="E-mail"
            />

            <FormControl
              style={{
                width: "25rem",
                marginLeft: "0.1rem",
                marginBottom: "30px",
                background: "#F5F5F5",
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <FormControl
              style={{
                width: "25rem",
                marginLeft: "0.1rem",
                marginBottom: "10px",
                background: "#F5F5F5",
              }}
              variant="outlined"
            >
              <InputLabel
                htmlFor="outlined-adornment-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
              >
                confirm password
              </InputLabel>

              <OutlinedInput
                id="outlined-adornment-confirm-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="confirm password"
              />
            </FormControl>
          </div>
          <div>
            <button className="btn1-Reset">Save</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;

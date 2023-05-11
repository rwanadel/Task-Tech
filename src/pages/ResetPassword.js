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
import FormHelperText from "@mui/material/FormHelperText";
import { useNavigate } from "react-router-dom";

import { isValidEmail } from "../Api/helpers";
import logo from "../assets/logo.png";
import Rpassword from "../assets/Rpassword.png";
import "../styles/ResetPasssword.css";
import { insertData } from "../Hook/useInsertData";
import { CustomSnackbar } from "../components/customSnackbar";
import LoaderComponents from "../components/LoaderComponents";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const saveData = async () => {
    try {
      setIsLoading(true)
      const response = await insertData("users/resetpassword", values ,'patch');
      navigate('/signIn');
      
    } catch (err) {
      console.log("err: ", err);
      setErrorMessage(
        err?.response?.data?.message ?? "Error, Please try again later"
      );
    }
    setIsLoading(false)
  };

  const handleSubmite = () => {
    if (
      isValidEmail(values.email) ||
      values.password?.length > 7 ||
      (values.confirmPassword?.length > 7 &&
        values.confirmPassword === values.password)
    ) {
      // talk to backend
      saveData();
      console.log("success");
    } else {
      setShowErrors(true);
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
      <LoaderComponents open={isLoading} />
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
            <FormControl
              variant="outlined"
              error={showErrors && !isValidEmail(values.email)}
              style={{
                marginBottom: "25px",
              }}
            >
              <TextField
                style={{
                  width: "25rem",

                  background: "#F5F5F5",
                }}
                error={showErrors && !isValidEmail(values.email)}
                id="outlined-helperText"
                label="E-mail"
                value={values.email}
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
              />
              <FormHelperText>
                {showErrors &&
                  !isValidEmail(values.email) &&
                  "This email is unvalid"}
              </FormHelperText>
            </FormControl>

            <FormControl
              style={{
                width: "25rem",
                marginLeft: "0.1rem",
                marginBottom: "30px",
              }}
              variant="outlined"
              error={showErrors && values.password?.length <= 7}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={(e) => {
                  handleChange("password", e.target.value);
                }}
                style={{
                  background: "#F5F5F5",
                }}
                error={showErrors && values.password?.length <= 7}
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
              <FormHelperText>
                {showErrors &&
                  values.password?.length <= 7 &&
                  "Password length should be longer than 7 "}
              </FormHelperText>
            </FormControl>

            <FormControl
              style={{
                width: "25rem",
                marginLeft: "0.1rem",
                marginBottom: "10px",
              }}
              error={
                showErrors &&
                (values.confirmPassword?.length <= 7 ||
                  values.confirmPassword !== values.password)
              }
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
                type={showConfirmPassword ? "text" : "password"}
                value={values.confirmPassword}
                onChange={(e) => {
                  handleChange("confirmPassword", e.target.value);
                }}
                style={{
                  background: "#F5F5F5",
                }}
                error={
                  showErrors &&
                  (values.confirmPassword?.length <= 7 ||
                    values.confirmPassword !== values.password)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="confirm password"
              />
              <FormHelperText>
                {showErrors &&
                  (values.confirmPassword?.length <= 7 ||
                    values.confirmPassword !== values.password) &&
                  "password isn't confirmed "}
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <button onClick={handleSubmite} className="btn1-Reset">
              Save
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;

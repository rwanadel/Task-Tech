import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'
import FormHelperText from '@mui/material/FormHelperText';
import { Input } from '@mui/material';

import signUp from "../assets/sign.png"
import logo from "../assets/logo.png"
import Google from "../assets/Google.png"
import facebook from "../assets/Vector.png"
import SignUpHook from '../Hooks/SignUp-Hook'
import { isValidEmail } from '../Api/helpers';
import "../styles/signUp.css"
import LoaderComponents from '../components/LoaderComponents';

const SignUp = () => {
  const { name, email, password, confirmPassword, OnchangeName, OnchangeEmail, OnchangePassword, OnchangeConfirmPassword, OnSubmit, showErrors, loading } = SignUpHook();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log('xcdf: ')
  console.log('loading: ', loading)

  return (
    <Container>
      <LoaderComponents open={loading} />
      <Row>
        <Col sm="12">
          <div className='logo-signUp'>
            <img src={logo} alt="logo" />
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="6">
          <div className="signUp">
            <img src={signUp} alt="signUp" />
          </div>
        </Col>
        <Col sm="6">
          <div className='text1'>
            <h3>Create an account,</h3>
          </div>
          <div className="text2">
            Let’s create account together
          </div>
          <div style={{ width: '20rem', marginLeft: "1rem" }}>
            <FormControl sx={{ m: 1 }} fullWidth variant="standard" error={showErrors && name.length === 0}>
              <TextField
              error={showErrors && name.length === 0}
                value={name}
                onChange={OnchangeName}
                id="standard-error"
                label="Full Name"
                variant="standard"
              />
              <FormHelperText>
                {showErrors && name.length === 0 && "Please Enter Full Name"}
              </FormHelperText>
            </FormControl>
            {/* <input value={email} onChange={OnchangeEmail} className="data" type="text" placeholder="Email" /><br /> */}
            <FormControl sx={{ m: 1 }} fullWidth variant="standard" error={showErrors && !isValidEmail(email)}>
              <TextField
              error={showErrors && !isValidEmail(email)}
                value={email}
                onChange={OnchangeEmail}
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
            <FormControl sx={{ m: 1 }} fullWidth variant="standard" error={showErrors && password.length < 7}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <Input
              error={showErrors && password.length < 7}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={OnchangePassword}
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
                {showErrors && password.length < 7 && "Password length should be more than 7"}
              </FormHelperText>
            </FormControl>
            {/* <input value={confirmPassword} onChange={OnchangeConfirmPassword} className="data" type="password" placeholder="confirm password" /><br />
              <i className='bx bx-hide eye-icon2'></i> */}
            <FormControl sx={{ m: 1 }} fullWidth variant="standard" error={showErrors && ( password !== confirmPassword || confirmPassword.length === 0) }>
              <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
              <Input
              error={showErrors && ( password !== confirmPassword || confirmPassword.length === 0) }
                id="outlined-adornment-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={OnchangeConfirmPassword}
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
                label="Confirm Password"
              />
              <FormHelperText>
                {showErrors && ( password !== confirmPassword || confirmPassword.length === 0) && `Passwords doesn't match`}
              </FormHelperText>
            </FormControl>
            <button onClick={OnSubmit} className='btn1' >sign in </button>
          </div>
          <div className='line'></div>
        </Col>
      </Row>
      <Row>
        <Col sm="6"></Col>
        <Col sm="6">
          <div className='media-options'>
            <Link href='#'>
              <img src={Google} alt="Google " className='google' />
            </Link>
          </div>
          <div className='media-options'>
            <Link href='#'>
              <img src={facebook} alt="facebook" className='facebook' />
            </Link>
          </div>

        </Col>
      </Row>
      <Row>
        <Col sm="6"></Col>
        <Col sm="6">
          <label className='trans'>
            Already Have an account ?
            <Link to="/signIn" style={{ textDecoration: "none" }}>
              <span style={{ cursor: 'pointer', color: ' rgb(22, 80, 105)', fontSize: '18v px' }}>
                sign in
              </span>
            </Link>
          </label>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp

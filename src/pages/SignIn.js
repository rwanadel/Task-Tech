import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import signUp from "../assets/sign.png"
import logo from "../assets/logo.png"
import Google from "../assets/Google.png"
import facebook from "../assets/Vector.png"
import "../styles/signIn.css"
import { Link } from 'react-router-dom'
const SignIn = () => {
    return (
        <div>
            <Container>
                <Row   >
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
                            <h3>Welcome Back,</h3>
                        </div>
                        <div className="text2">
                            Please login to continue ..
                        </div>
                        <div >
                            <input className="data" type="text" placeholder="Email" /><br />
                            <input className="data" type="password" placeholder="password" /><br />
                            {/* <i class='bx bx-hide eye-icon'></i> */}
                            <input className='checkbox' type="checkbox" name="Remember me" />
                            <label htmlFor="Remember me" className='Remenber'> Remember me</label>
                            <span  >
                                <Link href='#' className='fpassword' style={{ textDecoration: "none" }}>
                                    forgot password ?
                                </Link>
                            </span>
                            <br />
                            <button className='btn1'>sign in </button>
                        </div>
                        <div className='line'></div>

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

                        <label className='trans'>
                            Already Have an account ?
                            <Link to="/signUp" style={{ textDecoration: "none" , marginLeft: "0.5rem" , fontWeight:'bold' }}>
                                <span style={{ cursor: 'pointer', color: ' rgb(22, 80, 105)', fontSize: '18v px' }}>
                                    sign Up
                                </span>
                            </Link>
                        </label>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default SignIn

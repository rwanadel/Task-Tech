import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from "../assets/logo.png"
import verify from "../assets/Authentication.png"
import "../styles/Verify.css"
const Verify = () => {
    return (
        <Container>
            <Row>
                <Col sm="12" className='logo-verify'>
                    <img src={logo} alt='logo' />
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    <img src={verify} alt='verify' style={{width:'30rem'}} />
                </Col>
                <Col sm="6">
                    <div className='text1'>
                        <h3>Verification Code</h3>
                    </div>
                    <div className="text2">
                        Enter the verification code we just sent you on <br/> your email adress .
                    </div >
                    <div>
                        <input type='text' maxLength={1} className='input-verity' />
                        <input type='text' maxLength={1} className='input-verity' />
                        <input type='text' maxLength={1} className='input-verity' />
                        <input type='text' maxLength={1} className='input-verity' />
                    </div>

                    <div>
                        <button className='btn1-Verity' >Verity</button>
                    </div>
                    <div>
                        <label className='trans-Verify'>
                            Don’t recieve a code  ?
                            <Link to="/Reset" style={{ textDecoration: "none", marginLeft: "0.5rem", fontWeight: 'bold' }}>
                                <span style={{ cursor: 'pointer', color: ' rgb(22, 80, 105)', fontSize: '18v px' }}>
                                    Resend
                                </span>
                            </Link>
                        </label>
                    </div>
                </Col>

            </Row>
        </Container>
    )
}

export default Verify

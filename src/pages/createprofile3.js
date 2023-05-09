
import {  Col, Form, Row } from "react-bootstrap";
import "../styles/createprofile1.css"
import Basic from "../components/basic-in-createprofile";
import "../styles/createprofile1.css"
import "../styles/createprofile2.css"
import "../styles/createprofile3.css"

import { Link } from "react-router-dom";

const Create3=()=>{
    return(
        <div className="body">
        
        <Row> 
            <Col sm="12">
            <Basic/>
            </Col>
        </Row>

        <Row>
            <Col sm="12">
            <div class="w3-light-grey " style={{height:"14px"}}>
                        <div class="w3-container  w3-round-xlarge" style={{width:"75%",height:"14px",backgroundColor:"#165069"}}></div>
            </div>
            </Col>
        </Row>

        <Row>
        <Col  sm="4">
        <div className="box1">

            <Link to="/createprofile1">
                <button  className="cat-in-box1">Basic information</button>
            </Link> <hr/>
            <Link to="/createprofile2" >
                <button className="cat-in-box2" >About Me</button>
            </Link> <hr/>
            <Link to="/createprofile3" >
                <button className="cat-in-box3"style={{color:"#165069"}}>Education</button>
            </Link> <hr/>
            <Link to="/createprofile4" >
                <button className="cat-in-box4">view Profile</button>
            </Link>
        </div>
        </Col>
        <Col sm="8">
        <div className="education">
            <Form>
                <Row>
                    <Col sm="12">
                        <div className="title1">
                        Add your education here .
                        </div>
                        <div className="help">
                        If you don’t have a degree, adding any relevant education helps
                        make your profile visible .  
                        </div>
                        <div>
                    <input className="upload-btn" type="file"/>{/* upload file------------ */}
                        </div>

                        <div className="title1">
                        Upload Cv/ Resume .
                        </div>
                        <div>
                            upload2 {/* upload file------------ */}
                        </div>
                        <button className="btn-save">save</button>
                    </Col>
                </Row>

                

            </Form>
        </div>
        </Col>
        </Row>
    
    
        </div>
        
    )
}
export default Create3;
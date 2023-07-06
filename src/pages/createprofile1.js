

import {  Col,  Form, Row } from "react-bootstrap";
import "../styles/createprofile1.css"

import Basic from "../components/basic-in-createprofile";
import { Link } from "react-router-dom";
import Skills from "../components/skills";
import ProfilePic from "../components/uploadprofilepic";



const Create1=()=>{
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
                        <div class="w3-container  w3-round-xlarge" style={{width:"25%",height:"14px",backgroundColor:"#165069"}}></div>
                </div>
            </Col>
        </Row>


        <Row>
        <Col  sm="4">
        <div className="box1">

            <Link to="/createprofile1">
                <button  className="cat-in-box1" style={{color:"#165069"}}>Basic information</button>
            </Link> <hr/>
            <Link to="/createprofile2" >
                <button className="cat-in-box2">About Me</button>
            </Link> <hr/>
            <Link to="/createprofile3" >
                <button className="cat-in-box3">Education</button>
            </Link> <hr/>
            <Link to="/viewprofile1" >
                <button className="cat-in-box4">view Profile</button>
            </Link>
            </div>
        </Col>




        <Col sm="8">
        <Form>   {/*-------------------------------------------------------------------*/}
            <div className="box2" >
              <Row>        {/*img */}
                <Col sm="12">
                    <ProfilePic/>

                </Col>
                </Row>
                <Row >          {/*name mail */}
                    <Col sm="6" >
                    <div >
                        <label className="text-form">Name*</label>   
                        <input className="field-form" type="text"  /> 
                    </div>
                    </Col>
                    <Col sm="6">
                    <div>
                        <label className="text-form">Email</label>   
                        <input className="field-form" type="email"  /> 
                    </div>
                    </Col>
                
                </Row>


                <Row>         {/*gender birth */}
                <Col sm="3">
                    <label className="text-form">Gender</label>
                    <input className="field-form-mini" list="browsers" />

                    <datalist id="browsers">
                        <option value="Man"/>
                        <option value="Woman"/>
                    </datalist>
                </Col>
                <Col sm="3">
                    <label className="text-form">Age</label>
                    <input className="field-form-mini" type="text"/>
                </Col>
                <Col sm="6">
                    <label className="text-form">BirthDate</label>
                    <input className="field-form" type="date"/>
                </Col>
                
            </Row>
            <Row>      {/*location */}
            <Col sm="6" >
                    <div >
                        <label className="text-form">Location</label>   
                        <input className="field-form" type="location"  /> 
                    </div>
                    </Col>
                    <Col sm="6">
                    <div>
                        <label className="text-form">Phone Number</label>   
                        <input className="field-form" type="text"  /> 
                    </div>
                    </Col>
                
                
            </Row>
            </div>

            <div className="box3">
                <Skills/>
                <div className="parentto">
                <input className="enter-skills" type="text" placeholder="Type Skill.."/>
                <button type="submit" className="btn-for-skills">save</button>
                </div>
            </div>
        </Form>
        </Col>
        
        </Row>

    
        
        
        
        
        </div>
        
    )
}
export default Create1;
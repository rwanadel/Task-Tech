
import {  Col,  Form, Row } from "react-bootstrap";
import "../styles/createprofile1.css"
import "../styles/createprofile2.css"
import Basic from "../components/basic-in-createprofile";
import { Link } from "react-router-dom";

const Create2=()=>{
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
                        <div class="w3-container  w3-round-xlarge" style={{width:"50%",height:"14px",backgroundColor:"#165069"}}></div>
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
                <button className="cat-in-box2" style={{color:"#165069"}}>About Me</button>
            </Link> <hr/>
            <Link to="/createprofile3" >
                <button className="cat-in-box3">Education</button>
            </Link> <hr/>
            <Link to="/createprofile4" >
                <button className="cat-in-box4">view Profile</button>
            </Link>
        </div>
        </Col>




        <Col sm="8">
            <div className="box-aboutme" >
            <Row>
                <Col sm="12">
                    <div className="title-bio">Write a bio to tell the world about yourself .</div>
                    <div className="bio">Help people get to know you at a glance. what work are you best at? Tell them clearly,
                    using paragraphs or bullet points .
                    you can always edit later !</div>
                </Col>
            </Row>
            

            <Form action="createprofile3">
            <Row>
                <Col sm="12">
            
                    {/* <input className="bio-field" type="textarea"  />*/}  
                    <textarea  className="bio-field"> Describe your top skills, experiences, and interests. This is one of the first things clients will see on your profile.</textarea>
                        <div className="condition">At least 100 characters</div>
                
                </Col>
            </Row>

            <Row>
                <Col sm="12">
                    <div className="Ex">Expected Salary</div>
                </Col>
            </Row>
            <Row >          
                    <Col sm="6" >
                    <div >
                        <label className="min-text">Minimum</label>   
                        <input className="field-form" type="text" placeholder="2000" /> 
                    </div>
                    </Col>
                    <Col sm="6">
                    <div>
                        <label className="max-text">Maximum</label>   
                        <input className="field-form" type="email" placeholder="5000"  /> 
                    </div>
                    </Col>
                
                </Row>
                <Row >          
                    <Col sm="6" >
                    <div >
                        <label className="min-text">Currency</label>   
                        <input className="field-form" placeholder="USD" list="browsers" />
                            <datalist id="browsers">
                            <option value="AUD"/>
                            <option value="EGP"/>
                            <option value="EUR"/>
                            <option value="GBP"/>
                            <option value="INR"/>
                            <option value="IQD"/>
                            <option value="KWD"/>
                            <option value="SAR"/>
                            <option value="USD"/>
                            </datalist> 
                    </div>
                    </Col>
                    <Col sm="6">
                    <div>
                        <label className="max-text">Frequency</label>   
                        <input className="field-form" placeholder="Per month" list="salary" />
                            <datalist id="salary">
                            <option value="per day"/>
                            <option value="per week"/>
                            <option value="per month"/>
                            </datalist> 
                    </div>
                    </Col>
                
                </Row>
                <Row>
                    <button className="btn-save">save</button>
                </Row>
                </Form>
            </div>
        </Col>
        </Row>
    </div>
        
    
        
    )
}
export default Create2;
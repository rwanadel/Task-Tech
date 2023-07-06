import { Col, Container, Row } from "react-bootstrap";
import Basic from "../components/basic-in-createprofile";
import { Link } from "react-router-dom";
//import "../styles/viewprofile2.css"
import ProfilePic from "../components/uploadprofilepic";
import BasicInfo from "../components/basic info about user";

const Viewprofile3=()=>{
    return(
        <div>
           <Row> 
             <Col sm="12">
               <Basic/>
             </Col>
            </Row>
            <Row>
              <Col sm="12">
                        <div class="w3-light-grey " style={{height:"14px"}}>
                        <div class="w3-container  w3-round-xlarge" style={{width:"100%",height:"14px",backgroundColor:"#165069"}}></div>
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
                     <button className="cat-in-box3">Education</button>
                   </Link> <hr/>
                   <Link to="/viewprofile1" >
                      <button className="cat-in-box4" style={{color:"#165069"}}>view Profile</button>
                    </Link>
                 </div>
              </Col>
              <Col sm="8">
              <div className="box-profile">
              <BasicInfo/>
              <div className="navbar2">
               <Container>
               <Row className="navbar2">
               <Col sm="4"><Link to="/viewprofile1"><span className="word-navbar2">About me </span></Link></Col>
                 
               <Col sm="4"><Link to="/viewprofile2"><span className="word-navbar2">Reviews  </span></Link></Col>
               <Col sm="4"><Link to="/viewprofile3"><span className="word-navbar2">Portfolio <div class="w3-container  w3-round-xlarge" style={{width:"40%",height:"10px",backgroundColor:"#165069",margin:"10px"}}></div></span></Link></Col>
               </Row>
               </Container>
               </div>
              </div>
              </Col>
            </Row>
        </div>
    )
}
export default Viewprofile3;
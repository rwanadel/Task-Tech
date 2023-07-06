import { AiFillStar } from "react-icons/ai"
import "../styles/basic info about user.css"
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BasicInfo=({img,Name,job,rate})=>{
    return(
        <div>
        <img className="pic" alt="Remy Sharp" src={img}/>
        <div className="info">
              <div className="user-name">{Name}</div>
              <div className="job">{job}</div>
              <div className="all-stars">
              <AiFillStar className="star-active"/><AiFillStar className="star-active"/><AiFillStar className="star-active"/>
              <AiFillStar className="star-active"/><AiFillStar className="star"/>
              <span>{rate}</span>
              </div>
        </div>
        <Row className="twobtn">
               <Col sm="6">
               <Link to="/chats"><button className="M-btn">Message</button></Link>
               </Col>
               <Col sm="6">
               <button className="F-btn">Follow</button>
               </Col>
              </Row>
        </div>
    )
}
export default BasicInfo;
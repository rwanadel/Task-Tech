import { Col, Row } from "react-bootstrap";
import "../styles/landingpage.css"
import { Link } from "react-router-dom";


const Landing=()=>{
    return(
        <div  >
            <div className="bodyy">
                <Row>
                    <Col sm="8">
                <div className="onlanding">
                    <img className="logo2" src="logo2.png" alt="logo"/>
                    <div className="intro">We help you find your job based on your skillset and talent.</div>
                    <div className="intro2">help fresh graduates who need a job opportunity to develop themselves.
                    so it will help the business owners to save a lot of effort, time and money to get there service at the best price.</div>
                    <div className="btn-desg">Find a service</div>
                    <div className="btn-desg2"> Become freelancer </div>
                </div>
                </Col>
                <Col sm="4">
                <div className="toenter">
                    <img  src="user.png" alt="userlogo "/>
                    
                    <Link to="/signUp"> <div className="signup">Create account / </div></Link>
                    <Link to="/signIn"> <div className="signin">Login </div></Link>
                    
                </div>
                </Col>
                </Row>
            </div>
        </div>
    )
} 
export default Landing;
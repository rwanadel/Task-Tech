import Leftbar from "../components/leftbar-in-profile";
import Logo from "../assets/logo.png";
import {  Row } from "react-bootstrap";
import "../styles/createprofile1.css"

const Create2=()=>{
    return(
        <div className="body">
        
        <Row>
            <div className="logo">
            <img  src={Logo} alt="tasktech"/>
            </div>
        </Row>
        
        <Leftbar/>
        hello from2
        </div>
        
    )
}
export default Create2;
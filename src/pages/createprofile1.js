import Leftbar from "../components/leftbar-in-profile";

import {  Row } from "react-bootstrap";
import "../styles/createprofile1.css"
import Basic from "../components/basic-in-createprofile";

const Create1=()=>{
    return(
        <div className="body">
        <Row>
            <Basic/>
        </Row>
        <Row>
            <Leftbar/>
        </Row>
        
        
        
        
        </div>
        
    )
}
export default Create1;
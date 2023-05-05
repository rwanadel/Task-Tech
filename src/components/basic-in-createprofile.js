import { Row } from "react-bootstrap";
import Logo from "../assets/logo.png";
import"../styles/basic-in-createprofile.css"
const Basic=()=>{
    return(
        <div>
        <Row>
            <div className="logo">
            <img  src={Logo} alt="tasktech"/>
            </div>
        </Row>
        <Row>
            <div className="text-create">Create Profile</div>
        </Row>
        
        </div>
    )
}
export default Basic;
import { Link } from "react-router-dom";
import "../styles/leftbar-in-profile.css"
const Leftbar=()=>{
    return(
        <div>
            <div className="box">
            <Link to="/createprofile1">
                <button  className="cat-in-box1">Basic information</button>
            </Link> <hr/>
            <Link to="/createprofile2" >
                <button className="cat-in-box2">About Me</button>
            </Link> <hr/>
            <Link to="/createprofile3" >
                <button className="cat-in-box3">Education</button>
            </Link> <hr/>
            <Link to="/createprofile4" >
                <button className="cat-in-box4">view Profile</button>
            </Link>
            </div>
        </div>
    )
}
export default Leftbar;
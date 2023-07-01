import { Card } from "react-bootstrap";
import "../styles/postcard.css"
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
//import { isClickableInput } from "@testing-library/user-event/dist/utils";
//style={{pointerEvents: isClickableInput ? '' : 'none'}}
const Postcard=()=>{
    return(
        <div>
        <Link to="/post-details">
        
       <div>
        <Card className="postcard"style={{ width: '18rem' }}>
        <Card.Img  className="postcard-img" variant="top" src='postcard1.png' />
        <Card.Body>
        <Card.Title className="postcard-title">Web & App Design</Card.Title>
        <Card.Text>
        I will build a fully responsive design in html, css, bootstrap .   
        </Card.Text>
        <div>
          <AiFillStar className="card-rates-star"></AiFillStar>
          <AiFillStar className="card-rates-star"></AiFillStar>
          <AiFillStar className="card-rates-star"></AiFillStar>
          <AiFillStar className="card-rates-star"></AiFillStar>
          <AiFillStar className="card-rates-star"></AiFillStar>
          <span className="card5">5.0</span>
          <span className="card-rates">150 review</span>
        </div>
        
      </Card.Body>
    </Card>
    
    </div>
    </Link>
        </div>
    )
}
export default Postcard;

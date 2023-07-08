import { Col, Container, Row } from "react-bootstrap";
import Basic from "../components/basic-in-createprofile";
import { Link, useParams } from "react-router-dom";
import "../styles/viewprofile1.css"
import BasicInfo from "../components/basic info about user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import currtenuserAction from "../redux/actions/currtenuserAction";

const Viewprofile1 = () => {
const {id}=useParams();
console.log(id)

  //to get basic info about currten user
  const dispatchh=useDispatch();
  useEffect(()=>{
    dispatchh(currtenuserAction(id))   //هنا انا بجيب الاكشن اللي عايزه انفذه
  },[])

  const currten=useSelector(state=>state.currtenuserReducer.currtenuser) //انا هنا باكسس الداتا بتاعتي عن طريق الريديوسر
  const loading=useSelector(state=>state.currtenuserReducer.loading)
  console.log(currten)
  //console.log(high.users[0].skills)
  //console.log(loading) 



  //----------------------------------------
  return (
    <div>
      <Row>
        <Col sm="12">
          <Basic />
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <div class="w3-light-grey " style={{ height: "14px" }}>
            <div class="w3-container  w3-round-xlarge" style={{ width: "100%", height: "14px", backgroundColor: "#165069" }}></div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm="4">
          <div className="box1">

            <Link to="/createprofile1">
              <button className="cat-in-box1">Basic information</button>
            </Link> <hr />
            <Link to="/createprofile2" >
              <button className="cat-in-box2" >About Me</button>
            </Link> <hr />
            <Link to="/createprofile3" >
              <button className="cat-in-box3">Education</button>
            </Link> <hr />
            <Link to="/viewprofile1" >
              <button className="cat-in-box4" style={{ color: "#165069" }}>view Profile</button>
            </Link>
          </div>
        </Col>



        <Col sm="8">
          <div className="box-profile">
          {/* { currten.data.user?(<BasicInfo img={currten.data.user.photo} Name={currten.name} job={currten.user.job} rate={currten.ratingsAverage} />):null}*/}
         
            

            <div className="navbar2">
              <Container>
                <Row className="navbar2">
                  <Col sm="4"><Link to="/viewprofile/:id"><span className="word-navbar2">About me
                    <div class="w3-container  w3-round-xlarge" style={{ width: "50%", height: "10px", backgroundColor: "#165069", margin: "10px" }}></div>
                  </span></Link></Col>

                  <Col sm="4"><Link to="/viewprofile2"><span className="word-navbar2">Reviews</span></Link></Col>
                  <Col sm="4"><Link to="/viewprofile3"><span className="word-navbar2">Portfolio</span></Link></Col>
                </Row>
                {/*new  */}
                <Row>
                  <div className="bio-in-pro">
                    bioooooooooooooobio bio bio bio
                  </div>
                  <span className="education-w">Education</span>
                  <div className="education-box"><span>Computer Science</span><span>uni</span></div>
                  <div className="education-w">Salary</div>
                </Row>
              </Container>






            </div>

          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Viewprofile1;
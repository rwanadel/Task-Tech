import { Container,Row,Col, Form, Button } from "react-bootstrap";
import React from "react";
import "../styles/home.css"
import Layout from "../ui/Layout";



const Home = () => {
  return (
    <div>
      <Layout>
    <Container>
      {/* row1 vector and text */}
        <Row className="justify-content-center" >
          
          <Col sm="6" >
            <div className="search-text">
              Find the perfect freelancer <br/>
              services for your business
            </div>
            <div className="search-text2">
            Work with talented people at the most affordable price to get <br/>the most out of your time and cost .
            </div>
            <div className="search-tap">
            <form>
              <input type="text" placeholder="What are looking for ? "/>
              <input type="list" placeholder="Category"/>
              <button>Search</button>
            </form>
            </div>
          
          </Col>
          <Col sm="6">
            <div  >
            <img className="vector1"  src="v1 in home.png" alt="vector 1"/>
            </div>
          </Col>
        
        </Row>


      {/* row2 text (how it works) */}
        <Row>
          <Col sm='12' >
            <div className="works ">
            How It Works ?
            </div>
          </Col>
        </Row>


      {/* row3 4 box */}
        <Row>
          <Col sm='3'><div className="rectangle">
            <img  className="img-in-rec" src="create.png" alt="create"/>
            <div className="text-in-rec "> Create account</div>
            </div></Col>
          <Col sm='3'><div className="rectangle">
            <img className="img-in-rec" src="compelet.png" alt="compelet"/>
            <div className="text-in-rec"> Compelet profile</div>
            </div></Col>
          <Col sm='3'><div className="rectangle">
            <img className="img-in-rec" src="search.png" alt="search"/>
            <div className="text-in-rec">Search your job</div>
            </div></Col>
          <Col sm='3'><div className="rectangle">
            <img className="img-in-rec" src="job.png" alt="job"/>
            <div className="text-in-rec ">Apply for job</div>
            </div></Col>
        </Row>

      {/* row4 text (pop job) */}
      <Row>
        <Col sm="12">
          <div className="pop-text">
          Popular Job Category
          </div>
        </Col>
      </Row>

      {/* row5 4box*/}
      <Row>
      <Col sm='3'><div className="rectangle2 " >
            <img className="img-in-rec2"   src="ui ux.png" alt="uiux"/>
            <div className="text-in-rec2" >Ui/Ux Design <div className="skills">1,200 skills</div> </div> 
            
            </div></Col>
          <Col sm='3'><div className="rectangle2" >
            <img  className="img-in-rec2" src="web.png" alt="web"/>
            <div className="text-in-rec2" > Web Developer <div className="skills">1,200 skills</div> </div>
            
            </div></Col>
          <Col sm='3'><div className="rectangle2" >
            <img className="img-in-rec2" src="marketing.png" alt="marketing"/>
            <div className="text-in-rec2" >Marketing <div className="skills">1,200 skills</div></div>
            
            </div></Col>
          <Col sm='3'><div className="rectangle2" >
            <img className="img-in-rec2" src="app.png" alt="app"/>
            <div className="text-in-rec2" >App Developer <div className="skills">1,200 skills</div></div>
            
            </div></Col>
      </Row>


      {/* row6 4box*/}
      <Row>
      <Col sm='3'>
        <div className="rectangle3 " >
            <img className="img-in-rec3"   src="software.png" alt="software"/>
            <div className="text-in-rec3" >Software Engineering <div className="skills2">1,200 skills</div> </div> 
        </div>
      </Col>
      <Col sm='3'>
        <div className="rectangle3" >
            <img  className="img-in-rec3" src="product.png" alt="product"/>
            <div className="text-in-rec3" > Product Manager <div className="skills2">1,200 skills</div> </div>
        </div>
      </Col>
      <Col sm='3'>
        <div className="rectangle3" >
            <img className="img-in-rec3" src="accountant.png" alt="accountant"/>
            <div className="text-in-rec3" >Accountant<div className="skills2">1,200 skills</div></div>
            
        </div>
      </Col>
      <Col sm='3'>
        <div className="rectangle3" >
            <img className="img-in-rec3" src="graphic.png" alt="graphic"/>
            <div className="text-in-rec3" >Graphic Designer <div className="skills2">1,200 skills</div></div>
            
        </div>
      </Col>
      </Row>
      


      {/* row9 downloed app*/}
        
      
          <div className="box-to-app">
          <Row   >
          <Col sm="6" >
            <div className="text-in-boxtoapp">
            Stay connected to work with our 
                mobile application 
              
            </div>
            <div className="text2-in-boxtoapp" >
            mobile application which provides a high quality services to freelancers and business owners . 
            </div>
            <button className="button-to-download">Download mobile app</button>
            
            
          </Col>
          <Col sm="6">
            <div className="vector2"  >
            <img   src="downloed.png" alt="vector 2"/>
            </div>
          </Col>
          </Row>
          </div>
    



        </Container>
        </Layout>
    </div>

  )
};

export default Home;

import { Container,Row,Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../styles/home.css"
import Layout from "../ui/Layout";
import FreelancerCard from "../components/FreelancerCard";
import Postcard from "../components/postcard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import gettopusersaction from "../redux/actions/topusersAction";
import getrelatedpostsAction from "../redux/actions/relatedpostsAction";
import { BackendURL } from "../constants";



const Home = () => {
  const [topUsers, setTopUsers] = useState();

  const getUsers = async () => {
    // Already authenticated 
    let res = await axios.get(BackendURL+'/users/topuser');
    setTopUsers(res.data.data.users);
    console.log(res);
  }

  //to get top users---------------------------------------------------------
    const dispatchh=useDispatch();
    useEffect(()=>{
      getUsers();
      // dispatchh(gettopusersaction())   //هنا انا بجيب الاكشن اللي عايزه انفذه
    },[getUsers])
  
    const high=useSelector(state=>state.topusersReducer.users) //انا هنا باكسس الداتا بتاعتي عن طريق الريديوسر
    const loading=useSelector(state=>state.topusersReducer.loading)
    //console.log(high.users)
    //console.log(high.users[0].skills)
    //console.log(loading) 
    //-------------------------------------------------------------------------

    // to get related posts
    const dispatchh2=useDispatch();
    useEffect(()=>{
      dispatchh2(getrelatedpostsAction())   //هنا انا بجيب الاكشن اللي عايزه انفذه
    },[])
  
    const relatedpost=useSelector(state=>state.relatesposts.posts) //انا هنا باكسس الداتا بتاعتي عن طريق الريديوسر
    const loadingposts=useSelector(state=>state.relatesposts.loading)
    //console.log(relatedpost)
    
    //console.log(loadingposts) 

    //----------------------------------------------------------------------------------

  return (
    <div>
    <Layout>
    <Container>
      {/* row1 vector and text */}
        <Row  >
          
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
      {/* row7 post------------------------------------------------------*/}
      <Row>
      <Col sm='6'>
      <div className="recently-text">
      Related Posts
      </div>
      </Col>
      <Col sm='6' >
      <Row className="m">
      <Col sm='3'><button className="btn-All">All</button></Col>
      <Col sm='3'><button className="btn-web">Web Design</button></Col>
      <Col sm='3'><button className="btn-bess">Business</button></Col>
      <Col sm='3'><button className="btn-mark">Marketing</button></Col>
      </Row>
      </Col>
      </Row>
      <Row> {/*-------------------------------- */}
      <Col sm='3'>
          <Postcard/>
        </Col>
        <Col sm='3'>
        <Postcard/>
        </Col>
        <Col sm='3'>
        <Postcard/>
        </Col>
        <Col sm='3'>
        <Postcard/>
        </Col>
      </Row>
      {/* row8 high top users-----------*/}
      <Row>
         <span className="high">Highest Rated Freelancers</span>
        
         {
          topUsers?(
            topUsers.map((item)=>{
              return(

            <Col sm='3'>
            <FreelancerCard title2={item.name} img={item.photo}
             job={item.job} rate={item.ratingsAverage}
              reve={item.ratingsQuantity} skill1={item.skills[0]} 
              skill2={item.skills[1]} skill3={item.skills[2]}/>
              </Col>
              
              )})
             ):null
         }
         {
          high.users?(
            high.users.slice(0,4).map((item)=>{
              return(

            <Col sm='3'>
            <FreelancerCard title2={item.name} img={item.photo}
             job={item.job} rate={item.ratingsAverage}
              reve={item.ratingsQuantity} skill1={item.skills[0]} 
              skill2={item.skills[1]} skill3={item.skills[2]}/>
              </Col>
              
              )})
             ):null
         }
       
      </Row>
      
     

      {/* row9 downloed app------------------------------------------------*/}
        
      
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


import {  Col, Form, Row } from "react-bootstrap";
import "../styles/createprofile1.css"
import Basic from "../components/basic-in-createprofile";
import "../styles/createprofile1.css"
import "../styles/createprofile2.css"
import "../styles/createprofile3.css"

import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
// import { Autocomplete, Select } from "@mui/material";

const Create3=()=>{
    const arr=["Ain Shams University",
                    'Al Alamein International University',
                    'Al-Azhar University',
                    'Alexandria University',
                    'Arish University',
                    'Assiut University',
                    'Aswan University',
                    'Badr University in Cairo',
                    'Benha University',
                    'Beni-Suef University',
                    'Cairo University',
                    'Damanhour University',
                    'Damietta University',
                    'Delta University for Science and Technology',
                    'Egyptian Chinese University',
                    'Egypt-Japan University of Science and Technology',
                    'Fayoum University',
                    'Future University in Egypt',
                    'Galala University',
                    'Helwan University',
                    'Kafrelsheikh University',
                    'Luxor University',
                    'Mansoura University',
                    'Matrouh University',
                    'Menoufia University',
                    'Minia University',
                    'Misr International University',
                    'New Valley University',
                    'Pharos University in Alexandria',
                    'Port Said University',
                    'Sinai University',
                    'Sohag university',
                    'South Valley University',
                    'Suez Canal University',
                    'Suez University',
                    'Tanta University',
                    'The American University in Cairo',
                    'The Arab Academy for Management',
                    'Banking and Financial Sciences',
                    'The British University in Egypt',
                    'The German University in Cairo',
                    "Université Française d'Égypte",
                    'University of Sadat City',
                    'University of Science and Technology at Zewail City',
                    'Zagazig University',
                    'Massachusetts Institute of Technology (MIT)',
                    'Harvard University',
                    'University of Oxford',
                    'University of Cambridge',
                    'ETH Zurich (Swiss Federal Institute of Technology)',
                    'University of Tokyo',
                    'Universite PSL']

    const inputref=useRef(null);
    const [filecv,setfile]=useState("")

    const handlefileClick=()=>{
        inputref.current.click();
    }

    const handlefileChange=(event)=>{
        const file =event.target.files[0];
        console.log(file)
        setfile(event.target.files[0] );
    }



    const [img,setimg]=useState(null);
    const [cvname,setcvname]=useState("No selected file");
    return(
        <div className="body">
        {/*row1 to logo */}
        <Row> 
            <Col sm="12">
            <Basic/>
            </Col>
        </Row>
       {/*row2 to create and line */}
        <Row>
            <Col sm="12">
            <div class="w3-light-grey " style={{height:"14px"}}>
                        <div class="w3-container  w3-round-xlarge" style={{width:"75%",height:"14px",backgroundColor:"#165069"}}></div>
            </div>
            </Col>
        </Row>
        {/*row3  */}
        <Row>
        <Col  sm="4">
        <div className="box1">

            <Link to="/createprofile1">
                <button  className="cat-in-box1">Basic information</button>
            </Link> <hr/>
            <Link to="/createprofile2" >
                <button className="cat-in-box2" >About Me</button>
            </Link> <hr/>
            <Link to="/createprofile3" >
                <button className="cat-in-box3"style={{color:"#165069"}}>Education</button>
            </Link> <hr/>
            <Link to="/viewprofile1" >
                <button className="cat-in-box4">view Profile</button>
            </Link>
        </div>
        </Col>



        <Col sm="8">
        <div className="education">
            <Form>
                <Row>
                    <Col sm="12">
                    <div className="title1">
                        Add your education here .
                    </div>
                    <div className="help">
                        If you don’t have a degree, adding any relevant education helps
                        make your profile visible .  
                    </div>
                    {/* 
                    <div >
                    {/*  <input className="upload-btn" type="file"/>upload file------------ 
                    <input  type="file" ref={inputref} onChange={handlefileChange} style={{display:"none"}}/>
                    <div className="upload-btn-education" onClick={handlefileClick}>+  Add Education</div>
                    </div>
                */}

                <div>
                
                <select className="upload-btn-education">
                <option hidden>+  Add Education</option>
                {
                   arr.map((e)=>{
                    return(<option >{e}</option>)
                   })
                
                }
                
                </select>
                </div>
                    



                    <div className="title1">
                        Upload Cv/ Resume .
                    </div>

                    <div className="upload-cv" onClick={()=>document.querySelector(".input-field").click()}>
                    <BsFillFileEarmarkPlusFill className="cv-icon"/>
                    
                         <input type="file"  className="input-field" style={{display:"none"}} ref={inputref}  onChange={handlefileChange} />
                         {
                          filecv?(<span className="b-f" >Successful</span>):(<span className="b-f">Browse file</span>)
                         }  
                          

                    </div>
                       
                    </Col>
                </Row>

                
                <button className="btn-save">save</button>
            </Form>
        </div>
        </Col>
        </Row>
    
    
        </div>
        
    )
}
export default Create3;

//BsFillFileEarmarkPlusFill
import { useState } from "react";
import { Stack } from "react-bootstrap";
import "../styles/skills.css"

const Skills=()=>{

    const userskill=["Ui/Ux","Technology","Strategy","Interfaces","Programming","Writing","Web Design","Art & Illustration"]
    const[clicked,setClicked]=useState(false)
    return(

        <div>
        {
            userskill.map((item,index)=>{
                return(
                    <button key={index} className="btn-skills-nonclicked" onClick={()=>setClicked(true)}>
                        <div>
                            <p>{item}</p>
                            {clicked? <img src="tick.png" alt="tich mark"/>:<p>+</p>}
                        </div>
                    </button>
                )
            })

        }
        </div>
    )
}
export default Skills;
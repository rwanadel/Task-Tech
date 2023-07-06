import { useState } from "react";
import { ButtonGroup, Stack, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "../styles/skills.css"
import {BiPlus} from "react-icons"
import { Chip } from "@mui/material";


const Skills=()=>{

//const userskill=["Ui/Ux","Technology","Strategy","Interfaces","Programming","Writing","Web Design","Art & Illustration"]
    const[clicked,setClicked]=useState(false)
    const [isActive, setIsActive] = useState(false);
    
      const handleClick = () => {
            console.info('You clicked the Chip.');
            setClicked(!clicked)
            setIsActive(current => !current);
          };

    const[clicked2,setClicked2]=useState(false)
          const [isActive2, setIsActive2] = useState(false);
          
            const handleClick2 = () => {
                  console.info('You clicked the Chip.');
                  setClicked2(!clicked2)
                  setIsActive2(current => !current);
                };      

                const[clicked3,setClicked3]=useState(false)
                const [isActive3, setIsActive3] = useState(false);
                
                  const handleClick3 = () => {
                        console.info('You clicked the Chip.');
                        setClicked3(!clicked3)
                        setIsActive3(current => !current);
                      };        
                      
                      const[clicked4,setClicked4]=useState(false)
                      const [isActive4, setIsActive4] = useState(false);
                      
                        const handleClick4 = () => {
                              console.info('You clicked the Chip.');
                              setClicked4(!clicked4)
                              setIsActive4(current => !current);
                            };     

                            const[clicked5,setClicked5]=useState(false)
                      const [isActive5, setIsActive5] = useState(false);
                      
                        const handleClick5 = () => {
                              console.info('You clicked the Chip.');
                              setClicked5(!clicked5)
                              setIsActive5(current => !current);
                            };   


                            const[clicked6,setClicked6]=useState(false)
                      const [isActive6, setIsActive6] = useState(false);
                      
                        const handleClick6 = () => {
                              console.info('You clicked the Chip.');
                              setClicked6(!clicked6)
                              setIsActive6(current => !current);
                            };   


                            const[clicked7,setClicked7]=useState(false)
                      const [isActive7, setIsActive7] = useState(false);
                      
                        const handleClick7 = () => {
                              console.info('You clicked the Chip.');
                              setClicked7(!clicked7)
                              setIsActive7(current => !current);
                            };   


                            const[clicked8,setClicked8]=useState(false)
                      const [isActive8, setIsActive8] = useState(false);
                      
                        const handleClick8 = () => {
                              console.info('You clicked the Chip.');
                              setClicked8(!clicked8)
                              setIsActive8(current => !current);
                            };   
        
  
      
    

   
    
return(
    <div>

    <div  style={{
        backgroundColor: isActive ? '#165069' : '',
        color: isActive ? 'white' : '',
      }} 
      onClick={handleClick} className="btn-skills-nonclicked">
    <span>UI/UX</span>
    {clicked? <img src="tick.png" alt="tich mark"/>:<span>+</span>}
    </div>

    <div  style={{
        backgroundColor: isActive2 ? '#165069' : '',
        color: isActive2 ? 'white' : '',
      }} 
      onClick={handleClick2} className="btn-skills-nonclicked">
    <span>Technology</span>
    {clicked2? <img src="tick.png" alt="tich mark"/>:<span>+</span>}
    </div>


    <div  style={{
        backgroundColor: isActive3 ? '#165069' : '',
        color: isActive3 ? 'white' : '',
      }} 
      onClick={handleClick3} className="btn-skills-nonclicked">
    <span>Strategy</span>
    {clicked3? <img src="tick.png" alt="tich mark"/>:<span>+</span>}
    </div>


    <div  style={{
        backgroundColor: isActive4 ? '#165069' : '',
        color: isActive4 ? 'white' : '',
      }} 
      onClick={handleClick4} className="btn-skills-nonclicked">
    <span>Interfaces</span>
    {clicked4? <img src="tick.png" alt="tich mark"/>:<span>+</span>}
    </div>


    <div  style={{
        backgroundColor: isActive5 ? '#165069' : '',
        color: isActive5 ? 'white' : '',
      }} 
      onClick={handleClick5} className="btn-skills-nonclicked">
    <span>Programming</span>
    {clicked5? <img src="tick.png" alt="tich mark"/>:<span>+</span>}
    </div>



    <div  style={{
        backgroundColor: isActive6 ? '#165069' : '',
        color: isActive6 ? 'white' : '',
      }} 
      onClick={handleClick6} className="btn-skills-nonclicked">
    <span>Writing</span>
    {clicked6? <img src="tick.png" alt="tich mark"/>:<span>+</span>}
    </div>



    <div  style={{
        backgroundColor: isActive7 ? '#165069' : '',
        color: isActive7 ? 'white' : '',
      }} 
      onClick={handleClick7} className="btn-skills-nonclicked">
    <span>Web Design</span>
    {clicked7? <img src="tick.png" alt="tich mark"/>:<span>+</span>}
    </div>

    <div  style={{
        backgroundColor: isActive8 ? '#165069' : '',
        color: isActive8 ? 'white' : '',
      }} 
      onClick={handleClick8} className="btn-skills-nonclicked">
    <span>Art & Illustration</span>
    {clicked8? <img src="tick.png" alt="tich mark"/>:<span>+</span>}
    </div>





    






   </div>
        
    )
}
export default Skills;




//<div>
//<p>{item}</p>
//{clicked? <img src="tick.png" alt="tich mark"/>:<p>+</p>}
//</div



/* {
    
    userskill.map((item,index)=>{
        return(
            <div key={index}  className="btn-skills-nonclicked"  onClick={()=>setClicked(true)}>
               <p>{item}</p>  
               {clicked? <img src="tick.png" alt="tich mark"/>:<p>+</p>}
            </div>
        )
    })}*/
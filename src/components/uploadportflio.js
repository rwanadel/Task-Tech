import { useRef, useState } from "react";
import"../styles/uploadprofilepic.css";
import"../styles/portflio.css";

const Portflio=()=>{
    const [image,setImage]=useState("")
    const inputref=useRef(null);

    const handleImageClick=()=>{
        inputref.current.click();
    }

    const handleImageChange=(event)=>{
        const file =event.target.files[0];
        console.log(file)
        setImage(event.target.files[0] );
    }
    

return (
    <div>
    <div  onClick={handleImageClick}>
    
    
    <input type="file" ref={inputref} onChange={handleImageChange} style={{display:"none"}}/>
    
    </div>
    <div className="upload-port" onClick={handleImageClick}>+   Upload Photo</div>
    {
        image?(<div className="div-port"><img className="portflio" alt="Remy Sharp" src={URL.createObjectURL(image)}/></div>):
    (<h1>No portflio Found</h1>)
}
    </div>
);
}
export default Portflio;
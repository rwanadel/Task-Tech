import { Avatar } from "@mui/material";
import { useRef, useState } from "react";
import"../styles/uploadprofilepic.css";

const ProfilePic=()=>{
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
    
    {
        image?(<img className="pic" alt="Remy Sharp" src={URL.createObjectURL(image)}/>):
    (<img className="pic" alt="Remy Sharp" src="uploadphoto.png"/>)
}
    <input type="file" ref={inputref} onChange={handleImageChange} style={{display:"none"}}/>
    {/*<form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInputChange} accept="image/*" />
        {previewUrl && <img src={previewUrl} alt="Preview" />}
        <button type="submit">Upload</button>
</form>*/}
    </div>
    <div className="upload-btn2" onClick={handleImageClick}>+   Upload Photo</div>
    </div>
);
}
export default ProfilePic;
import { useState } from "react";

const ProfilePic=()=>{
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    // Send the selected file to the server
    };

return (
    <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInputChange} accept="image/*" />
        {previewUrl && <img src={previewUrl} alt="Preview" />}
        <button type="submit">Upload</button>
    </form>
);
}
export default ProfilePic;
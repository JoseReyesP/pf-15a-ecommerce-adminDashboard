import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";

const PhotoUploader = () => {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto", // Adjust the height as needed
    width: "auto",
    margin: "5px",
  };

  const [image, setImage] = useState(
    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
  );
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoName, setPhotoName] = useState("");

  useEffect(() => {
    console.log("image: ", selectedFile);
    if (selectedFile !== null) setImage(URL.createObjectURL(selectedFile));
  }, [selectedFile]);

  const handleChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChage = (event) => {
    setPhotoName(event.target.value);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert("Please select an image");
        return;
      }
      const formData = new FormData();
      selectedFile && formData.append("photoData", selectedFile);
      photoName && formData.append("name", photoName);

      const response = await axios.post(
        `${config.serverURL}/api/photos`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Server response:", response.data);
      alert("Image successfully uploaded");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
    }
  };

  return (
    <div style={divStyle}>
      <h1>New Photo</h1>
      <img
        src={image}
        style={{ width: "200px", height: "200px", margin: "20px" }}
      />
      <input type="file" accept=".png" onChange={handleChange} id="photo" />
      <label htmlFor="photoName" id="photoNameLabel">
        Photo name:{" "}
      </label>
      <input type="text" id="photoName" onChange={handleNameChage} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload Image
      </button>
    </div>
  );
};

export default PhotoUploader;

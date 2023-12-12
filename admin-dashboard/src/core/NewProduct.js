import React, { useState, useEffect } from "react";
import axios from "axios";

const NewProduct = () => {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto", // Adjust the height as needed
    width: "auto",
    margin: "5px",
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
  );
  const [values, setValues] = useState({
    title: "",
    price: "",
    stock: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    console.log("image: ", selectedFile);
    if (selectedFile !== null)
      setPreviewImage(URL.createObjectURL(selectedFile));
  }, [selectedFile]);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    if (name === "photo") {
      setSelectedFile(event.target.files[0]);
    }
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert("Please select an image");
        return;
      }
      const formData = new FormData();
      selectedFile && formData.append("photo", selectedFile);
      values.title && formData.append("title", values.title);
      values.price && formData.append("price", values.price);
      values.stock && formData.append("stock", values.stock);
      values.description && formData.append("description", values.description);
      values.category && formData.append("category", values.category);
      formData.append(
        "image",
        "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
      );

      await axios.post("http://localhost:3001/api/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    }
  };

  return (
    <div style={divStyle}>
      <h1>New Product</h1>
      <img
        src={previewImage}
        style={{ width: "200px", height: "200px", margin: "20px" }}
      />
      <input
        type="file"
        accept=".png"
        onChange={handleChange("photo")}
        id="photo"
      />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload Image
      </button>
      <div style={divStyle}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" onChange={handleChange("title")} />
        <br />
        <label htmlFor="price">Price: </label>
        <input type="text" id="price" onChange={handleChange("price")} />
        <br />
        <label htmlFor="stock">Stock: </label>
        <input type="text" id="stock" onChange={handleChange("stock")} />
        <br />
        <label htmlFor="description">Description: </label>
        <textarea id="description" onChange={handleChange("Description")} />
        <br />
        <label for="cars">Category:</label>
        <select id="category" onChange={handleChange("Description")}>
          <option value="657122b7fe7c6097f5167de9" selected>
            Ropa hombre
          </option>
          <option value="657122bcfe7c6097f5167ded">Ropa mujer</option>
          <option value="657122c5fe7c6097f5167df1">Joyeria</option>
        </select>
        <br />
        <button style={{ margin: "40px", width: "200px" }}>
          {" "}
          <h2>GUARDAR</h2>{" "}
        </button>
      </div>
    </div>
  );
};

export default NewProduct;

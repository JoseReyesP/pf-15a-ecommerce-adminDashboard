import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";

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

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    if (name === "photo") {
      setSelectedFile(event.target.files[0]);
    }
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert("Please select an image");
        return;
      }

      const formDataPhoto = new FormData();
      selectedFile && formDataPhoto.append("photoData", selectedFile);
      formDataPhoto.append("name", selectedFile.name);
      console.log("photo name: ", selectedFile.name);

      console.log("uploading the photo first....");
      const photoResponse = await axios.post(
        `${config.serverURL}/api/photos`,
        formDataPhoto,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("photo uploaded, id: ", photoResponse.id, photoResponse);

      console.log("creating the new product");
      const formDataProduct = new FormData();
      values.title && formDataProduct.append("title", values.title);
      values.price && formDataProduct.append("price", values.price);
      values.stock && formDataProduct.append("stock", values.stock);
      values.description &&
        formDataProduct.append("description", values.description);
      values.category && formDataProduct.append("category", values.category);
      formDataProduct.append(
        "image",
        `https://pf-15a.up.railway.app/api/photos/${photoResponse.data.id}`
      );

      await axios.post(`${config.serverURL}/api/product`, formDataProduct, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("New product successfully created");
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setValues({
        title: "",
        price: "",
        stock: "",
        description: "",
        category: "",
      });
      setSelectedFile(null);
      setPreviewImage(config.previewImageURL);
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
        <input
          type="text"
          id="title"
          onChange={handleChange("title")}
          value={values.title}
        />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          id="price"
          onChange={handleChange("price")}
          value={values.price}
        />
        <br />
        <label htmlFor="stock">Stock: </label>
        <input
          type="text"
          id="stock"
          onChange={handleChange("stock")}
          value={values.stock}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <textarea id="description" onChange={handleChange("description")} />
        <br />
        <label for="cars">Category:</label>
        <select id="category" onChange={handleChange("category")}>
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

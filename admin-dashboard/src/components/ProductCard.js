import React, { useEffect, useState } from "react";
import trashIcon from "../assets/images/trash.svg";
import editIcon from "../assets/images/edit.svg";
import SwitchButton from "./SwitchButton";

const ProductCard = (props) => {
  const [imageSrc, setImageSrc] = useState(null);
  // console.log(props.photo, typeof props.photo, props.image);
  // const base64Image = "";
  // const imgSrc = props.image;
  // if (props.photo !== undefined) {
  //   console.log(typeof props.photo);

  //   setImageSrc(`data:${props.photo.contentType};base64,${base64Image}`);
  // }
  // useEffect(() => {
  //   if (props.photo && props.photo.data && props.photo.contentType) {
  //     const base64Image = props.photo.data.toString("base64");
  //     setImageSrc(`data:${props.photo.contentType};base64,${base64Image}`);
  //   } else {
  //     console.log("Invalid photo object or missing contentType");
  //     console.log("props.photo", props.photo);
  //   }
  // }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "0.5em",
          border: "2px solid #000",
          borderRadius: "5px",
          backgroundColor: "white",
          width: "400px",
          overflow: "scroll",
        }}
      >
        <img
          style={{ width: "100px", height: "100px", margin: "0.5em" }}
          src={
            props.photo !== undefined
              ? `data:${
                  props.photo.contentType
                };base64,${props.photo.data.toString("base64")}`
              : props.image
          }
        />
        <div style={{ padding: "5px" }}>
          <div>
            <strong>ID: </strong>
            {props.id}
          </div>
          <div>
            <strong>Title: </strong>
            {props.title}
          </div>
          <div>
            <strong>Price: </strong>
            {props.price}
          </div>
          <div>
            <strong>Image URL: </strong>
            <a href={props.image}>{props.image}</a>
          </div>
          <div>
            <strong>Description: </strong>
            {props.description}
          </div>
          <button
            style={{
              margin: "5px",
              backgroundColor: "#ff183e",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <img src={trashIcon} style={{ width: "18px", height: "18px" }} />
          </button>
          <button
            style={{
              margin: "5px",
              backgroundColor: "#186dff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <img src={editIcon} style={{ width: "18px", height: "18px" }} />
          </button>
          {/* <SwitchButton /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

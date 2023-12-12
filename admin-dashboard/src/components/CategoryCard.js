import React from "react";
import profileImage from "../assets/images/profile-pic.png";
import trashIcon from "../assets/images/trash.svg";
import editIcon from "../assets/images/edit.svg";

const CategoryCard = (props) => {
  return (
    <div style={{ width: "350px", marginRight: "3px" }}>
      <div
        style={{
          display: "flex",
          margin: 0,
          border: "2px solid #000",
          borderRadius: "5px",
          backgroundColor: "white",
          width: "350px",
        }}
      >
        <div style={{ padding: "5px" }}>
          <div>
            <strong>ID: </strong>
            {props.id}
          </div>
          <div>
            <strong>Name: </strong>
            {props.name}
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
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

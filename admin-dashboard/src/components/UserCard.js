import React, { useState } from "react";
import profileImage from "../assets/images/profile-pic.png";
import trashIcon from "../assets/images/trash.svg";
import editIcon from "../assets/images/edit.svg";
import uploadIcon from "../assets/images/upload.svg";

const UserCard = (props) => {
  const [editing, setEditing] = useState(false);
  const onEditHandle = () => {
    setEditing(true);
  };
  const onSaveEditHandle = () => {
    setEditing(false);
  };
  const handleConfirmation = () => {
    console.log("confirming");
    const isConfirmed = window.confirm(
      `Desea eliminar a ${props.name} ${props.lastname}`
    );
    // Check the user's choice
    if (isConfirmed) {
      alert("Usuario eliminado");
    } else {
      alert("Proceso cancelado");
    }
  };
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
          height: "185px",
        }}
      >
        <div>
          <img
            style={{ width: "100px", height: "100px", margin: "0.5em" }}
            src={profileImage}
          />
          {editing ? (
            <div>
              <button style={{ marginLeft: "40px" }}>
                <img
                  src={uploadIcon}
                  style={{ width: "24px", height: "24px" }}
                />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div style={{ padding: "5px" }}>
          <div>
            <strong>ID: </strong>
            {props.id}
          </div>
          <div>
            {editing ? (
              <div>
                <input id="name" type="text" placeholder={props.name} />
              </div>
            ) : (
              <div>
                <strong>Name: </strong>
                {props.name}
              </div>
            )}
          </div>
          <div>
            {editing ? (
              <div>
                <input id="lastname" type="text" placeholder={props.lastname} />
              </div>
            ) : (
              <div>
                <strong>Lastname: </strong>
                {props.lastname}
              </div>
            )}
          </div>
          <div>
            {editing ? (
              <div>
                <input id="email" type="text" placeholder={props.email} />
              </div>
            ) : (
              <div>
                <strong>Email: </strong>
                {props.email}
              </div>
            )}
          </div>
          <div>
            {!editing ? (
              <div>
                <button
                  style={{
                    margin: "5px",
                    backgroundColor: "#ff183e",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  onClick={handleConfirmation}
                >
                  <img
                    src={trashIcon}
                    style={{ width: "18px", height: "18px" }}
                  />
                </button>
                <button
                  style={{
                    margin: "5px",
                    backgroundColor: "#186dff",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  onClick={onEditHandle}
                >
                  <img
                    src={editIcon}
                    style={{ width: "18px", height: "18px" }}
                  />
                </button>
              </div>
            ) : (
              <button onClick={onSaveEditHandle}>
                <strong>Guardar</strong>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

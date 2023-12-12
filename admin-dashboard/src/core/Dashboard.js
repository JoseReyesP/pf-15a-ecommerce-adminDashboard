import React, { useState, useEffect } from "react";
import { usersList } from "../users/api-users";

const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        setLoading(true);
        const data = await usersList();
        setUserList(data);
      } catch (error) {
        console.log("Error fetching user list: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserList();
  }, []);
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "auto", // Adjust the height as needed
  };
  const userslist = usersList();
  return (
    <div style={divStyle}>
      <section>
        <div>
          <h2>DASHBOARD</h2>
        </div>
      </section>
      <section>
        <fieldset>
          <legend>Admin options: </legend>
          <button style={{ margin: "0.5em" }}>Create new user</button>
          <button style={{ margin: "0.5em" }}>Edit a user</button>
          <button style={{ margin: "0.5em" }}>Create new product</button>
          <button style={{ margin: "0.5em" }}>Edit product</button>
          <button style={{ margin: "0.5em" }}>Create new category</button>
          <button style={{ margin: "0.5em" }}>Edit category</button>
          <button style={{ margin: "0.5em" }}>Create new review</button>
          <button style={{ margin: "0.5em" }}>Edit review</button>
          <button style={{ margin: "0.5em" }}>
            Create new purchase history
          </button>
          <button style={{ margin: "0.5em" }}>Edit purchase history</button>
        </fieldset>
      </section>
      <section>
        <fieldset>
          <legend>Users List</legend>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {userList.map((user) => (
                <p key={user._id}>{user.name}</p>
              ))}
            </ul>
          )}
        </fieldset>
        <fieldset>
          <legend>Products List</legend>
        </fieldset>
        <fieldset>
          <legend>Categories List</legend>
        </fieldset>
        <fieldset>
          <legend>Reviews List</legend>
        </fieldset>
        <fieldset>
          <legend>Purchase History</legend>
        </fieldset>
      </section>
    </div>
  );
};

export default Dashboard;

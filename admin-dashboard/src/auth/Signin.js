import React, { useState } from "react";
import auth from "./../auth/auth-helper";
import { Navigate } from "react-router-dom";
import { signin } from "./api-auth.js";

export default function Signin(props) {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh", // Adjust the height as needed
  };
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectToReferrer: false,
  });

  const clickSubmit = ({ target }) => {
    event.preventDefault();
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        console.log(values.error);
      } else {
        auth.authenticate(data, () => {
          console.log(data);
          setValues({ ...values, error: "", redirectToReferrer: true });
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const { redirectToReferrer } = values;
  if (redirectToReferrer) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div style={divStyle}>
      <h1>Welcome admin.</h1>
      <h2>please log in</h2>
      <form onSubmit={clickSubmit}>
        <label htmlFor="email" id="email-label">
          Email:
        </label>
        <br />
        <input
          id="email"
          type="email"
          label="Email"
          value={values.email}
          onChange={handleChange("email")}
        />
        <br />
        <label htmlFor="password" id="password-label">
          Password:
        </label>
        <br />
        <input
          id="password"
          type="password"
          label="Password"
          value={values.password}
          onChange={handleChange("password")}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

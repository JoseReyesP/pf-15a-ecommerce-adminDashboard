import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usersList } from "../API/api-users";
import { productsList } from "../API/api-products";
import { categoryList } from "../API/api-category";
import { reviewList } from "../API/api-reviews";
import UserCard from "../components/UserCard";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import ReviewCard from "../components/ReviewCard";
import config from "../config/config";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [reviews, setReviewsList] = useState([]);
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");

  // useEffect(async () => {
  //   const fetchProductList = async () => {
  //     try {
  //       const data = await productsList();
  //       console.log("product list", data);
  //       setProductList(data);
  //     } catch (error) {
  //       console.log("Error fetching product list: ", error);
  //     }
  //   };

  //   const fetchData = async () => {
  //     await fetchProductList();
  //     setLoading(false);
  //   };

  //   await fetchData();

  //   // Move the logic that depends on the updated state here
  //   setProductList((prevProductList) => {
  //     const last = prevProductList.pop();
  //     console.log("el ultimo product: ", last.photo);

  //     setImageSrc(
  //       `http://${config.serverURL}/api/product/photo/657bb0736a078afa6cfc7f0d`
  //     );

  //     return prevProductList; // Return the updated array
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log(imageSrc);
  // }, imageSrc);

  const onClickProduct = () => {
    console.log("New product");
    navigate("/newProduct");
  };
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto", // Adjust the height as needed
    width: "auto",
    margin: "5px",
  };

  return (
    <div style={divStyle}>
      <section>
        <div>
          <h2>DASHBOARD</h2>
          <img
            src={`http://${config.serverURL}/api/product/photo/657bb0736a078afa6cfc7f0d`}
          ></img>
        </div>
      </section>
      <section>
        <fieldset style={{ backgroundColor: "#eccda6" }}>
          <legend>
            <h2>Create new data</h2>
          </legend>
          <button style={{ margin: "0.5em" }}>Create new user</button>
          <button style={{ margin: "0.5em" }} onClick={onClickProduct}>
            Create new product
          </button>
          <button style={{ margin: "0.5em" }}>Create new category</button>
        </fieldset>
      </section>
      <section>
        <fieldset style={{ backgroundColor: "#e5f1e6" }}>
          <legend>
            <h2>User List</h2>
          </legend>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "3px",
              }}
            >
              {userList.map((user) => (
                <UserCard
                  key={user._id}
                  id={user._id}
                  name={user.name}
                  lastname={user.lastname}
                  email={user.email}
                />
              ))}
            </ul>
          )}
        </fieldset>
        <fieldset style={{ backgroundColor: "#e5f0f1" }}>
          <legend>
            <h2>Product list</h2>
          </legend>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                columnGap: "16px",
              }}
            >
              {/* {productList.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  photo={product.photo}
                />
              ))} */}
            </ul>
          )}
        </fieldset>
        <fieldset>
          <legend>
            <h2>Categories</h2>
          </legend>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                columnGap: "16px",
              }}
            >
              {categoriesList.map((category) => (
                <CategoryCard
                  key={category._id}
                  id={category._id}
                  name={category.name}
                />
              ))}
            </ul>
          )}
        </fieldset>
        <fieldset>
          <legend>
            <h2>Reviews list</h2>
          </legend>
          <h2>Muy pronto...</h2>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Purchase history</h2>
            <h2>Muy pronto...</h2>
          </legend>
        </fieldset>
      </section>
    </div>
  );
};

export default Dashboard;

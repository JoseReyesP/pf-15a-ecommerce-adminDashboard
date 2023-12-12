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

const Dashboard = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [reviews, setReviewsList] = useState([]);
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
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
    const fetchProductList = async () => {
      try {
        setLoading(true);
        const data = await productsList();
        setProductList(data);
      } catch (error) {
        console.log("Error fetching product list: ", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchCategoryList = async () => {
      try {
        setLoading(true);
        const data = await categoryList();
        setCategoriesList(data);
      } catch (error) {
        console.log("Error fetching product list: ", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchReviewsList = async () => {
      try {
        setLoading(true);
        const data = await reviewList();
        console.log("2 - despues del await: ", data);
        setTest(data);
        console.log("3 - despues del set:", test);
      } catch (error) {
        console.log("Error fetching reviews: ", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchData = async () => {
      await fetchUserList();
      await fetchProductList();
      await fetchCategoryList();
      await fetchReviewsList();
    };

    await fetchData();
    console.log("4 - despues del fetch", test);
  }, []);

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
              {productList.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  photo={product.photo}
                />
              ))}
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

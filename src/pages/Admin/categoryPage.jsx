import React, { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Categories")
      .then((res) => res.json())
      .then((data) => {
        const categoryList = data._embedded.categoryList;
        setCategory(categoryList);
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("Failed to fetch categories."); // Show error toast
      });
  }, []);

  return (
    <div className="home-div">
      <div className="iconleft">
        <Link to="/newcategory">
          <button
            type="submit"
            className="icon-button"
            title="Add new category"
          >
            <img
              className="search-icon"
              src="https://i.ibb.co/f2BsGYP/plus.png"
              alt="Search"
            />
          </button>
        </Link>
      </div>
      {category.map((category) => {
        return (
          <div className="product-card-container" key={category.id}>
            <CategoryCard key={category.id} categoryList={category} />
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default CategoryPage;
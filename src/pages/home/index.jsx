import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import SlideCard from "../../components/Slideshow/sliderCard";
import "./style.css";
// import CheckoutButton from "../../components/order";
import Pagination from '@mui/material/Pagination';

const NextButton = ({ nextPage, fetchProducts }) => {
  const handleNextPage = () => {
    fetchProducts(nextPage);
  };

  return <button className="circular-button" onClick={handleNextPage}></button>;
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchProducts = (page) => {
    const nextPage = `http://localhost:8080/products?page=${page}`;
    fetch(nextPage)
      .then((res) => res.json())
      .then((data) => {
        const productList = data._embedded.productList;
        setProducts(productList);
        setCurrentPage(page);
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    fetchProducts(value);
  };

  return (
    <div>
      {/* <CheckoutButton /> */}
      <section className="sliderr">
        <SlideCard />
      </section>
      <div className="home-div">
        <div className="filter-div"></div>
        <h2 className="headline">Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} productList={product} />
          ))}
        </div>
        <br />
        <div className="filter-div"></div>
        {/* <div className="button-container">
          <NextButton
            nextPage={1}
            fetchProducts={fetchProducts}
          />
          <NextButton
            nextPage={2}
            fetchProducts={fetchProducts}
          />
          <NextButton
            nextPage={3}
            fetchProducts={fetchProducts}
          />
        </div> */}
        <Pagination
          count={3}
          page={currentPage}
          onChange={handlePageChange}
        />
        <br />
      </div>
    </div>
  );
};

export default Home;

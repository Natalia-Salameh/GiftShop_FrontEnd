import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard';
import './style.css';
const NextButton = ({ nextPage, fetchProducts }) => {
  const handleNextPage = () => {
    fetchProducts(nextPage);
  };
  

  return (
    <button className='circular-button' onClick={handleNextPage}>
    </button>
  );
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState('http://localhost:8080/products');

  const fetchProducts = (page) => {
    fetch(page)
      .then((res) => res.json())
      .then((data) => {
        const productList = data._embedded.productList;
        setProducts(productList);
        setCurrentPage(page);
      })
      .catch((err) => console.log('err', err));
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);
  

  return (
    <div className="home-div">
      {/* Filter */}
      <div className="filter-div"></div>
      {/* Product List */}
      <div className="product-list">
        {products.map((product) => {
          return <ProductCard key={product.id} productList={product} />;
        })}
      </div>
      <br />
      <div className="filter-div"></div>
      {/* Button Container */}
      <div className="button-container">
        <NextButton nextPage="http://localhost:8080/products?page=0" fetchProducts={fetchProducts} />
        <NextButton nextPage="http://localhost:8080/products?page=1" fetchProducts={fetchProducts} />
        <NextButton nextPage="http://localhost:8080/products?page=2" fetchProducts={fetchProducts} />
      </div>
      <br />
    </div>
  );
};

export default Home;

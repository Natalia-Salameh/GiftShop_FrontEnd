import React, { useEffect, useState } from 'react';
import ProductCard from '../productCart/productCart';

const Candles = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((res) => res.json())
      .then((data) => {
        const productList = data._embedded.productList;
        setProducts(productList);
      })
      .catch((err) => console.log('err', err));
  }, []);
  

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
    </div>
  );
};

export default Candles;
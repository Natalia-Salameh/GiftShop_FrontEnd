import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard';

const WoodArt = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/Categories/6/products')
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
    return (
      <div className="product-card-container" key={product.id}>
        <ProductCard productList={product} />
      </div>
    );
  })}
</div>


    </div>
  );
};

export default WoodArt;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard';
import './style.css'
const ProductPage = () => {
  const { name } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/products/name/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} productList={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
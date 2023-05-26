import React, { useEffect, useState } from 'react';

const ProductPage = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then((res) => res.json())
      .then((data) => {
        const productList = data._embedded.productList;
        setproduct(productList);
      })
      .catch((err) => console.log('err', err));
  }, []);
  

  return (
    <div className="home-div">
  {product.map((product) => {
    return (
        <Link to={`/products/id/${productList.id}`}>
      <div className="product-card-container" key={product.id}>
                  return <AdminProductCard key={product.id} productList={product} />;
      </div>
      </Link>
    );
  })}


    </div>
  );
};

export default ProductPage;
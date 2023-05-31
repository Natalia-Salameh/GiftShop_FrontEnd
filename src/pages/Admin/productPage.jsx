import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminProductCard from '../../components/AdminProductCard/adminProductCard';
import { Link } from 'react-router-dom';
const ProductPageAdmin = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/Categories/${id}/products`)
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
      <div className='iconleft'>
       <Link to="/newproduct">
          <button type="submit" className="icon-button"  title="Add new product">
            <img className="search-icon" src="https://i.ibb.co/f2BsGYP/plus.png" alt="Search" />
          </button>
        </Link>
        </div>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card-container" key={product.id}>
        <AdminProductCard key={product.id} productList={product} />
     </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPageAdmin;

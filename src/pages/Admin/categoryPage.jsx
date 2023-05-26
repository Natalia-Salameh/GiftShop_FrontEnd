import React, { useEffect, useState } from 'react';
import CategoryCard from '../../components/CategoryCard';

const CategoryPage = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/Categories')
      .then((res) => res.json())
      .then((data) => {
        const categoryList = data._embedded.categoryList;
        setCategory(categoryList);
      })
      .catch((err) => console.log('err', err));
  }, []);
  

  return (
    <div className="home-div">
  {category.map((category) => {
    return (
      <div className="product-card-container" key={category.id}>
        <CategoryCard categoryList={category} />
      </div>
    );
  })}


    </div>
  );
};

export default CategoryPage;
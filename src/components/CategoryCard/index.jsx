import React from 'react';
import { Link } from 'react-router-dom';
const CategoryCard = ({ categoryList }) => {

  const styles = {
    backgroundImage: `url(${categoryList.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    /* Add other necessary styles */
  };
  return (
    <Link to={`/Categories/${categoryList.id}/products`}>
<div className="container" style={styles}>

      <div className="overlay">
        <h2 className="head">{categoryList.name}</h2>
        <hr />
      </div>
      <div className="overlay">
        <h2 className="head">{categoryList.image}</h2>
        <hr />
      </div>
    </div>
    </Link>
  );
};

export default CategoryCard;


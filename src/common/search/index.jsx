import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProductSearchInput = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Search.."
      />

      {name ? (
        <Link to={`/products/name/${name}`}>
          <span>
            <i className="bi bi-search"></i>
          </span>
        </Link>
      ) : (
        <i className="bi bi-search" disabled></i>
      )}
    </div>
  );
};

export default ProductSearchInput;

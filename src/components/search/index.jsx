// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProductCard from '../productCard';

// const SearchButton = () => {
//   const [products, setProducts] = useState([]);

//   const handleSearch = (event) => {
//     const name = event.target.value;
//     fetch(`http://localhost:8080/products/name/${name}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setProducts([]);
//       });
//   };

//   return (
//     <div className="home-div">
//       <div>
//         <input
//           type="text"
//           onChange={handleSearch}
//           placeholder="Search by name..."
//         />
//       </div>
//       <Link to={`/product/name/`}>
//         <div className="product-list">
//           {products.map((product) => (
//             <Link to={`/product/id/${product.id}`} key={product.id}>
//               <ProductCard productList={product} />
//             </Link>
//           ))}
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default SearchButton;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const ProductSearchInput = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
    <form>
      <input className="in"
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Search"
      />
      {name && (
        <Link to={`/products/name/${name}`}>
          <span>Search</span>
        </Link>
      )}
    </form>
</div>
  );
};

export default ProductSearchInput;

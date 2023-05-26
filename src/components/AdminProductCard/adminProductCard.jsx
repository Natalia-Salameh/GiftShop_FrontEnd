import React from 'react';
const AdminProductCard = ({ id }) => {

  const [product, setProduct] = useState([])
  useEffect(()=>{ 
     fetch(`http://localhost:8080/products/id/${id}`).then(res=>res.json()).then(data=>setProduct(data))
},[])

    const styles = {
        backgroundImage: `url(${product.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        /* Add other necessary styles */
      };
  return (
<div className="container" style={styles}>

      <div className="overlay">
        <h2 className="head">{product.name}</h2>
        <hr />
      </div>
      <div className="overlay">
        <h2 className="head">{product.image}</h2>
        <hr />
      </div>
    </div>
  );
};

export default AdminProductCard;


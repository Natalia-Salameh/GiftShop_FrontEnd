import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css'

const ProductDetails = () => {
    const {id} = useParams();
  
  
    const [product, setProduct] = useState({})
    useEffect(()=>{ 
       fetch(`http://localhost:8080/products/id/${id}`).then(res=>res.json()).then(data=>setProduct(data))
  },[])
  
 
  return (
      <div className='div'>
        <h1 className='h1'>Product Details </h1>
        <div className="product-image">
          <img  className='img' src={product.image} />
        </div>
        <div className='div'>
          <h3 className='h3'>{product.title}</h3>
          <p className='p'>{product.description} </p>
          <p className='p2'>{product.category} </p>
          <p className='p3'>{product.price} $</p>
          <p className='p2'>rate : {product?.rating?.rate} count : {product?.rating?.count} </p>
        </div>
  
      </div>

  )};
  export default ProductDetails;
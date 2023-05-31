import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import axios from 'axios';
const AdminProductCard = ({ productList }) => {

  const [name, setName] = useState(productList.name);
  const [colour, setColour] = useState(productList.colour);
  const [price, setPrice] = useState(productList.price);
  const [size, setSize] = useState(productList.size);
  const [productStock, setStock] = useState(productList.productStock);
  const [image, setImage] = useState(productList.image);
  const [selectedImage, setSelectedImage] = useState(null);

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '350px',
    height: '400px',
    marginBottom: '10px',
    /* Add other necessary styles */
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const updatedProduct = {
      id: productList.id,
      name,
      colour,
      price,
      size,
      productStock,
      image: selectedImage || image,
      category_id: productList.category_id, // Add the category_id
      description : productList.description,
      quantity :productList.quantity
    };
  
    // Rest of the code...  
  
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    };
  
    fetch(`http://localhost:8080/products/${productList.id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error updating product');
        }
        console.log('Product updated:', updatedProduct);
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };
  

  

  return (
    <>
      <div className="containercategory">
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.gif"
          style={styles}
          onChange={handleImageChange}
        />

        <div className="product">
          <div className="grid-container">
            <div className="grid-item">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </label>
            </div>

            <div className="grid-item">
              <label>
                Colour:
                <input
                  type="text"
                  name="colour"
                  value={colour}
                  onChange={e => setColour(e.target.value)}
                />
              </label>
            </div>
            <div className="grid-item">
              <label>
                Price:
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </label>
            </div>
            <div className="grid-item">
              <label>
                Size:
                <input
                  type="text"
                  name="size"
                  value={size}
                  onChange={e => setSize(e.target.value)}
                />
              </label>
            </div>
            <div className="grid-item">
              <label>
                Stock:
                <input
                  type="text"
                  name="stock"
                  value={productStock}
                  onChange={e => setStock(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <button className="btn" onClick={handleSave}>Save</button>

      </div>
    </>
  );
};

export default AdminProductCard;

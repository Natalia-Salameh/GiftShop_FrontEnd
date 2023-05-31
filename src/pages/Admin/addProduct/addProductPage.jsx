import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import "./style.css";

const AddNewProduct = () => {
  const [warningMessage, setWarningMessage] = useState("");

  const handleSave = async () => {
    const imgFile = document.querySelector('input[name="img"]').files[0];
    const name = document.querySelector('input[name="name"]').value;
    const color = document.querySelector('input[name="color"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const size = document.querySelector('input[name="size"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;
    const category = document.querySelector('input[name="category"]').value;
    const description = document.querySelector('textarea[name="description"]').value;

    if (!imgFile || !name || !color || !price || !size || !quantity || !category || !description) {
      setWarningMessage("Please fill in all the fields.");
      return;
    }

    try {
      // Fetch the category by name to get the category_id
      const categoryResponse = await fetch(`http://localhost:8080/Categories/name/${category}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (categoryResponse.ok) {
        const categoryData = await categoryResponse.json();
        const categoryId = categoryData.id;

        const productId = Math.floor(Math.random() * 1000000); 
        const productData = {
         id: productId,
         image: URL.createObjectURL(imgFile),
          name: name,
          colour: color,
          price: price,
          size: size,
          quantity: quantity,
          category_id: categoryId,
          description: description,
          productStock: 0
        };

        const response = await fetch('http://localhost:8080/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(productData)
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
          // Perform any additional actions or update the UI accordingly
        } else {
          throw new Error('Request failed with status ' + response.status);
        }
      } else {
        throw new Error('Request failed with status ' + categoryResponse.status);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <div className="centered-div">
        <div className="hom-div">
          <label htmlFor="img">Insert Image</label>
          <input type="file" name="img" id="img" accept=".jpg,.jpeg,.png,.gif" />

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />

          <label htmlFor="color">Color</label>
          <input type="text" name="color" id="color" />

          <label htmlFor="price">Price</label>
          <input type="text" name="price" id="price" />

          <label htmlFor="size">Size</label>
          <input type="text" name="size" id="size" />

          <label htmlFor="quantity">Quantity</label>
          <input type="text" name="quantity" id="quantity" />

          <label htmlFor="category">Category</label>
          <input type="text" name="category" id="category" />

          <label htmlFor="description">Insert Product Description</label>
          <textarea className="description" name="description" id="description"></textarea>

          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;

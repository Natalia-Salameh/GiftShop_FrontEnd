import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"



const CategoryCard = ({ categoryList }) => {
  const id = categoryList.id;
  const [backgroundImage, setBackgroundImage] = useState(categoryList.image);
  const [categoryName, setCategoryName] = useState(categoryList.categoryName);
  const [description, setDescription] = useState(categoryList.description);

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '350px',
    height: '400px',
    marginBottom: '10px',
    /* Add other necessary styles */
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setBackgroundImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveButtonClick = () => {
    // Send the request to update the category
    // You can use fetch or any other library to make the request

    const updatedCategory = {
      id: id,
      categoryName: categoryName,
      description: description,
      image: categoryList.image
    };

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCategory)
    };

    fetch(`http://localhost:8080/Categories/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          // Handle the successful response
          console.log('Category updated successfully');
        } else {
          // Handle the error response
          console.error('Category update failed');
        }
      })
      .catch((error) => {
        // Handle any network or other errors
        console.error('An error occurred while updating the category', error);
      });
  };

  return (
    <>
      {/* <Link to={`Categories/${id}/products`}> */}
      <div className="containercategory">
        <input className='input'
          type="file"
          accept=".jpg,.jpeg,.png,.gif"
          style={styles}
          onChange={handleFileChange}
        />
        {/* <div className="slideshow-buttons">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div> */}
        <div className="product">
          <input className='input'
            type="text"
            name="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          /><br />
          <textarea 
            className="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button className="btn" onClick={handleSaveButtonClick}>Save</button>
        <Link  to={`Categories/${id}/products`}>
        <button className="btn2" onClick={handleSaveButtonClick}>view products</button>
        </Link>
      </div>
      {/* </Link> */}
    </>
  );
};

export default CategoryCard;

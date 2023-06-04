import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./admincategory.css";

const AddNewCategory = () => {
  const [warningMessage, setWarningMessage] = useState("");

  const handleSave = () => {
    const imgFile = document.querySelector('input[name="img"]').files[0];
    const name = document.querySelector('input[name="name"]').value;
    const description = document.querySelector('textarea[name="description"]').value;

    if (!imgFile || !name || !description) {
      setWarningMessage("Please fill in all the fields.");
      return;
    }

    const categoryData = {
      img: URL.createObjectURL(imgFile),
      name: name,
      description: description
    };

    fetch('http://localhost:8080/Categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(categoryData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed with status ' + response.status);
        }
      })
      .then(data => {
        // Handle the response data
        console.log(data);
        // Perform any additional actions or update the UI accordingly
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <>
 <div class="centered-div">
  <div class="hom-div">
    <label for="img">Insert Image</label>
    <input type="file" name="img" accept=".jpg,.jpeg,.png,.gif" />
  
    <label for="name">Insert Category Name</label>
    <input type="text" name="name" />
  
    <label for="description">Insert Category Description</label>
    <textarea class="description" name="description"></textarea>
  
    <button class="save-button" onClick={handleSave}>Save</button>
  
    {warningMessage && <p class="warning">{warningMessage}</p>}
  </div>
</div>

    </>
  );
};

export default AddNewCategory;

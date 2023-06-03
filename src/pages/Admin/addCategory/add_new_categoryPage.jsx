import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const AddNewCategory = () => {
  const [warningMessage, setWarningMessage] = useState("");

  const handleSave = () => {
    const imgFile = document.querySelector('input[name="img"]').files[0];
    const name = document.querySelector('input[name="name"]').value;
    const description = document.querySelector(
      'textarea[name="description"]'
    ).value;

    if (!imgFile || !name || !description) {
      setWarningMessage("Please fill in all the fields.");
      return;
    }

    const categoryData = {
      img: URL.createObjectURL(imgFile),
      name: name,
      description: description,
    };

    fetch("http://localhost:8080/Categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with status " + response.status);
        }
      })
      .then((data) => {
        console.log(data);
        toast.success("Category saved successfully!"); // Show success toast
        // Perform any additional actions or update the UI accordingly
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to save category."); // Show error toast
      });
  };

  return (
    <>
      <div className="centered-div">
        <div className="hom-div">
          <label htmlFor="img">Insert Image</label>
          <input type="file" name="img" accept=".jpg,.jpeg,.png,.gif" />

          <label htmlFor="name">Insert Category Name</label>
          <input type="text" name="name" />

          <label htmlFor="description">Insert Category Description</label>
          <textarea className="description" name="description"></textarea>

          <button className="save-button" onClick={handleSave}>
            Save
          </button>

          {warningMessage && <p className="warning">{warningMessage}</p>}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddNewCategory;

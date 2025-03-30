import React, { useState } from "react";
import { Modal } from "@fluentui/react/lib/Modal";
import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";
import "./UploadPage.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
const UploadPage = () => {
    const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch("http://127.0.0.1:5000/classify", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setResult(`Prediction: ${data.result}`);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult("Error: Unable to connect to the server.");
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalStyles = mergeStyleSets({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      maxWidth: "400px",
      width: "90%",
    },
  });
   const gotohomepage = () =>
  {
    navigate('/');

  }

  return (
    <div className="upload-page">
      <CloseIcon style={{marginLeft:"440px", marginTop:"-100px" , cursor:"pointer"}} onClick={gotohomepage}></CloseIcon>

      <h2>Upload Retinal Image</h2>
      <div className="image-container">
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="displayed-image"
          />
        ) : (
          <p className="placeholder-text">Input Image</p>
        )}
      </div>
      <div className="options-container">
        <label htmlFor="file-input" className="browse-button">
          Browse
        </label>
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleImageChange}
          hidden
        />
      </div>
      <button className="upload-button" onClick={handleUpload}>
        Upload
      </button>

      <Modal
  isOpen={isModalOpen}
  onDismiss={closeModal}
  isBlocking={false}
  containerClassName="modal-container"
>
  <div className="modal-content">
    <h3>Your level of Diabetic is:</h3>
    <h2>{result}</h2>
    <div style={{ textAlign: "right", marginTop: "20px" }}>
      <button  style={{ marginRight:"180px"}} onClick={closeModal}>Close</button>
    </div>
  </div>
</Modal>

    </div>
  );
};

export default UploadPage;

import React, { useState } from 'react';
import './UploadPage.css';

const UploadPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image before uploading.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await fetch('http://127.0.0.1:5000/classify', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setResult(`Prediction: ${data.result}`);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult('Error: Unable to connect to the server.');
    }
  };

  return (
    <div className="upload-page">
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
      {result && <p className="result-text">{result}</p>}
    </div>
  );
};

export default UploadPage;

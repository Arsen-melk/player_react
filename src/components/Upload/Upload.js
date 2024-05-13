import React, { useState } from 'react';
import "./Upload.css"


//I used the internet for some of this component and functionality ))
const Upload = () => {

  //we use useState hook for state change
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  
  const handleUpload = () => {
    // Simulate file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20);
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
      }
    }, 1000);
  };

  return (
    <div className='upload-form'>
      <h2>Upload Music</h2>
      <input type="file" accept=".mp3,.wav" onChange={handleFileChange} className='file-input' />
      <button onClick={handleUpload} disabled={!selectedFile} className='form-button'>
        Upload
      </button>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      {uploadProgress > 0 && (
        <div>
          <p>Upload Progress: {uploadProgress}%</p>
          <progress value={uploadProgress} max="100" />
        </div>
      )}
    </div>
  );
};

export default Upload;

import React from 'react';
import './Header.css';

export default function Header({
  currentImageIndex,
  onImageClick,
  imagePaths,
}) {
  return (
    <div className="header--container">
      <img
        src={imagePaths[currentImageIndex]}
        className="profile--image"
        alt={`Image ${currentImageIndex + 1}`}
        onClick={onImageClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

// Comments moved to the bottom:

// Import React and the useState hook from the 'react' library
// Import the styles for the Header component
// Define the Header component as a functional component
// Accept props for image state and click handler
// Render the Header component with an image

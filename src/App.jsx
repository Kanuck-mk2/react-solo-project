import React, { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

const socialMediaData = [
  { name: 'Facebook', link: 'https://www.facebook.com', icon: 'facebook.png' },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com',
    icon: 'instagram.png',
  },
  { name: 'GitHub', link: 'https://www.github.com', icon: 'github.png' },
  { name: 'Twitter', link: 'https://www.twitter.com', icon: 'twitter.png' },
];

import './App.css';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  // Function to handle email button click
  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:flexingbiceps@outlook.com';
  };

  // Function to handle website button click
  const handleWebsiteButtonClick = () => {
    window.location.href = 'https://www.benchpressed.com';
  };

  // Specify the path to your profile image
  const imagePaths = [
    'shawn-fit.jpg',
    'shawn-sing.jpg',
    'profile.jpg',
    'shawn-side.jpg',
    'shawn-posing.jpg'
  ];

  return (
    <>
      {/* Header component for the top section of the app */}
      <Header
        currentImageIndex={currentImageIndex}
        onImageClick={handleImageClick}
        imagePaths={imagePaths}
      />

      {/* Main component with props to handle button clicks */}
      <Main
        onEmailButtonClick={handleEmailButtonClick}
        onWebsiteButtonClick={handleWebsiteButtonClick}
      />

      {/* Footer component with social media data passed as props */}
      <Footer socialMediaData={socialMediaData} />
    </>
  );
}

export default App;

// Comments moved to the bottom:

// Import the necessary React components and styles                 // Line 1
// Define an array of social media data with name, link, and icon properties  // Line 6
// Import the CSS file for styling                                   // Line 12
// Main App component
// State to track the index of the currently displayed image
// State using the useState hook
// Function to handle image click and toggle the displayed image
// Update the state to the next image in a circular manner
// Function to handle email button click                             // Line 22
// Function to handle website button click                           // Line 26
// Specify the path to your profile image                             // Line 30
// Export the App component as the default export of this module     // Line 55

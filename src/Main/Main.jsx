// Main.jsx

import './Main.css';

// Main component with props for handling button clicks
export default function Main({ onEmailButtonClick, onWebsiteButtonClick }) {
  // Function to handle email button click
  const handleEmailButtonClick = () => {
    // Check if onEmailButtonClick prop is provided before invoking
    if (onEmailButtonClick) {
      onEmailButtonClick();
    }

    // Open a new window for the email functionality
    window.open('mailto:flexingbiceps@outlook.com', '_blank');
  };

  // Function to handle website button click
  const handleWebsiteButtonClick = () => {
    // Check if onWebsiteButtonClick prop is provided before invoking
    if (onWebsiteButtonClick) {
      // Open a new window for the website functionality
      window.open('https://www.benchpressed.com', '_blank');
    }
  };

  return (
    // Main container for the business card section
    <main className="business-card">
      {/* Section for the card title */}
      <div className="card-title">
        <h1>Alex Mendes</h1>
        <p className="profile-title">Fullstack Developer</p>
        <p className="profile-title-sub">codetolift.com</p>
      </div>

      {/* Container for contact buttons */}
      <div className="button--container">
        {/* Button for email with click event */}
        <button
          className="contact-button"
          id="email-button"
          onClick={handleEmailButtonClick}
        >
          <img
            src="/public/email.png"
            alt="Button Image"
            className="button--image"
          />
          Email
        </button>

        {/* Button for website with click event */}
        <button
          className="contact-button"
          id="web-button"
          onClick={handleWebsiteButtonClick}
        >
          <img
            src="/public/website.png"
            alt="Button Image"
            className="button--image"
          />
          Website
        </button>
      </div>

      {/* About Me section */}
      <div className="profile--about">
        <h3>About Me</h3>
        <p className="profile--about--p">
          An aspiring fullstack developer with a passion to write clean
          efficient code. I enjoy learning new ways to code and embracing new
          innovations in the tech industry.
        </p>
      </div>

      {/* Interests section */}
      <div className="profile--about">
        <h3>Interests</h3>
        <p className="profile--about--p">
          Singing and playing guitar, hitting the gym, eating and cooking
          interesting food, gaming.
        </p>
      </div>
    </main>
  );
}

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
      window.open('https://www.shawnmendesofficial.com/', '_blank');
    }
  };

  return (
    // Main container for the business card section
    <main className="business-card">
      {/* Section for the card title */}
      <div className="card-title">
        <h1>Alex Mendes</h1>
        <p className="profile-title">Web Developer</p>
        <p className="profile-title-sub">Vertex Designs</p>
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
            src="envelope.png"
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
          <img src="code.png" alt="Button Image" className="button--image" />
          Website
        </button>
      </div>

      {/* About Me section */}
      <div className="profile--about">
        <h3>About Me</h3>
        <p className="profile--about--p">
          An aspiring Web Developer with a passion to create beautiful user
          interfaces and webpages while writing clean, efficient, and
          well-structured code.<br></br> I enjoy learning new ways to program
          and embracing new innovations in web design.
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

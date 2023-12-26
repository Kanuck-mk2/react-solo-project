import './Footer.css'; // Importing the CSS file for styling

export default function Footer({ socialMediaData }) {
  return (
    <>
      <footer className="footer-container">
        <div className="social-icons-container">
          {socialMediaData.map((socialMedia, index) => (
            <a
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img
                src={socialMedia.icon}
                alt={`${socialMedia.name}-logo`}
                className={`${socialMedia.name.toLowerCase()}--logo`}
              />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

// Comments moved to the bottom:

// Importing the CSS file for styling
// The Footer component receives a prop named socialMediaData
// Footer container with social icons
// Container for social icons
// Using the map method to iterate over socialMediaData array
// Each social icon is a link (anchor tag) with a unique key and styling
// Image for the social icon
// Dynamically setting a class based on the social media name

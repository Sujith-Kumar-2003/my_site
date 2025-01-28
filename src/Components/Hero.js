import React, { useState } from 'react'; // Add useState for hover effect

function Hero() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const styles = {
    section: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // Keep content aligned to the top
      alignItems: "flex-start", // Keep content left-aligned
      marginTop: "18vh", // Adds margin to top
      height: "80vh", // Height of the section
      padding: "0 1rem", // Adjusted padding for more centered alignment
      marginLeft: "auto", // Pushes content a bit towards the center
      marginRight: "auto", // Ensures it doesn't go too far right
    },
    heading1: {
      color: "#F9C74F", // Primary color
      marginBottom: "2.5rem",
      fontSize: "clamp(13px, 5vw, 17px)",
    },
    heading2: {
      fontSize: "clamp(40px, 8vw, 80px)",
      marginBottom: "1.5rem",
    },
    heading3: {
      fontSize: "clamp(30px, 7vw, 52px)",
      color: "#6B7280", // Secondary text color
      marginBottom: "2.5rem",
    },
    paragraph: {
      color: "#6B7280", // Secondary text color
      maxWidth: "540px",
      fontSize: "clamp(13px, 5vw, 17px)",
      marginBottom: "3.5rem",
      lineHeight: "1.5", // Increases line spacing for better readability
    },
    button: {
      backgroundColor: isHovered ? "#F9C74F" : "transparent", // Change to yellow when hovered
      color: isHovered ? "#2B2D42" : "#F9C74F", // Text color changes when hovered
      padding: "1.25rem 2.5rem",
      border: isHovered ? "2px solid transparent" : "2px solid #F9C74F", // Transparent border on hover
      borderRadius: "9999px", // Rounded button
      fontSize: "1.875rem",
      transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
      textDecoration: "none",
      cursor: "pointer",
    },
  };
  
  

  return (
    <section style={styles.section}>
      <h1 style={styles.heading1}>Hi, my name is</h1>
      <h2 style={styles.heading2}>Sujith Kumar.</h2>
      <h3 style={styles.heading3}>
        I build software that works. <small>(sometimes)</small>
      </h3>
      <p style={styles.paragraph}>
        I'm a CS student with a passion for software development. I enjoy
        creating innovative solutions and exploring new technologies. This
        portfolio showcases my projects and technical skills.
      </p>
      <a
        href="https://drive.google.com/file/d/1-XYvWDjNs9bUkIVMJovqGSSg0UDAVWvu/view?usp=sharing"
        style={styles.button}
        onMouseOver={() => setIsHovered(true)} // Set hover state to true
        onMouseOut={() => setIsHovered(false)} // Set hover state to false
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my Resume!
      </a>
    </section>
  );
}

export default Hero;

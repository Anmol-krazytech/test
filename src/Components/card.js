import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const OverflowCard = ({ id, image, courseName, level, link }) => {
  const [externalLink, setExternalLink] = React.useState(false)

  useEffect(() => {
    console.log(link?.toLowerCase()?.includes('http'));
    
    link?.toLowerCase()?.includes('http') ? setExternalLink(true) : setExternalLink(false)
  }, [])

  return (
    <NavLink
      to={externalLink ? `${link}` : `/${link}`}
      target={externalLink ? "_blank" : "_self"}
    >
      <div style={styles.card} key={id}>
        <img src={image} alt={courseName} style={styles.image} />
        <h3 style={styles.courseName}>{courseName}</h3>
        <p style={styles.level}>{level}</p>
      </div>
    </NavLink>
  );
};

const styles = {
  card: {
    backgroundColor: "#f5f5f5",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
  },
  image: {
    width: "250px",
    heigth: "250px",
    borderRadius: "8px",
  },
  courseName: {
    fontSize: "1.2rem",
    color: "#118AB2", // Accent color
    margin: "0.5rem 0",
  },
  level: {
    fontSize: "1rem",
    color: "#073B4C", // Text color
  },
};

export default OverflowCard;

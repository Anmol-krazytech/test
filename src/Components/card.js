import React from "react";

const OverflowCard = ({
  id,
  title,
  subTitle,
  image,
  link = null,
  courseName = null,
  chapterName = null,
  material = null,
  noLink = false
}) => {
  const [routeLink, setRouteLink] =  React.useState('/#');

  React.useEffect(() => {
    if (link) return setRouteLink(`${link}`);
    if (!courseName) return setRouteLink('/#');
    if (!chapterName) return setRouteLink(`/Courses/${courseName}`);
    if (!material) return setRouteLink(`/Courses/${courseName}/${chapterName}`);

    return setRouteLink(`/Courses/${courseName}/${chapterName}/${material}`);
  }, [])

  const handleNavigation = () => {
    if (noLink) {
      return;
    }
    if (link) {
      window.open(routeLink, '_blank');
    } else {
      window.open(routeLink, '_self');
    }
  }

  return (
      <div onClick={handleNavigation} style={styles.card} key={id}>
        <img src={image} alt={title} style={styles.image} />
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.subTitle}>{subTitle}</p>
      </div>
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
    cursor: 'pointer'
  },
  image: {
    width: "250px",
    heigth: "250px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "1.2rem",
    color: "#118AB2", // Accent color
    margin: "0.5rem 0",
  },
  subTitle: {
    fontSize: "1rem",
    color: "#073B4C", // Text color
  },
};

export default OverflowCard;

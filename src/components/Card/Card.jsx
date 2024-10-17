import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import Modal from "../Modal/Modal";
import { FaArrowRight } from "react-icons/fa";
import Tags from "../Tags/Tags";

const Card = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsHovered(false);
  };

  const handleCardClick = () => {
    if (isSmallScreen) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div
      className="card"
      onMouseEnter={() => !isSmallScreen && setIsHovered(true)}
      onMouseLeave={() => !isSmallScreen && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <img src={project.image} alt={project.title} className="card__image" />

      {!isHovered && !isModalOpen && (
        <h2 className="card__title">{project.title}</h2>
      )}

      {(isHovered || isSmallScreen) && (
        <div className="card__details">
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          {project.technologies && (
            <Tags items={project.technologies} replaceByIcon={false} />
          )}

          <div className="card__more-info" onClick={handleOpenModal}>
            <span>En savoir plus</span>
            <FaArrowRight className="card__icon" />
          </div>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={project.title}
        context={project.context || "Contexte non disponible"}
        challenge={project.challenge || "Challenge non disponible"}
        technologies={project.technologies}
        github={project.github}
        link={project.link}
      />
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    context: PropTypes.string,
    challenge: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Card;

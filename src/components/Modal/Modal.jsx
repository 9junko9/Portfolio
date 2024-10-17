import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = ({
  isOpen,
  onClose,
  title,
  context,
  challenge,
  github,
  link,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times; {/* Croix de fermeture */}
        </button>
        <div className="modal-body">
          <div className="modal-text">
            <h2 className="modal-title">{title}</h2>
            <p>
              <strong className="modal-label">Contexte :</strong> {context}
            </p>
            <p>
              <strong className="modal-label">Challenge :</strong> {challenge}
            </p>
          </div>

          <div className="modal-buttons">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button"
              >
                Voir sur GitHub
              </a>
            )}

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button"
              >
                Visiter le site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  context: PropTypes.string,
  challenge: PropTypes.string,
  github: PropTypes.string,
  link: PropTypes.string,
};

export default Modal;

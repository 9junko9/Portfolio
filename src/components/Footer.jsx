import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <p>© 2024 Jennifer Vernet. Tous droits réservés.</p>
      <p>
        Contact :{" "}
        <a href="mailto:ton-email@example.com">jennifer.vernet@gmail.com</a>
      </p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/jennifer-vernet-241a712ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/9junko9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

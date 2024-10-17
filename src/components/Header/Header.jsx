import { useEffect, useState } from "react";
import "./Header.scss";
import logo from "/images/logoWhite.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navLinks = document.querySelectorAll(".nav-links a");
      const sections = Array.from(navLinks).map((link) => {
        const sectionId = link.getAttribute("href").substring(1);
        return document.getElementById(sectionId);
      });

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (
          sectionTop <= window.innerHeight / 2 &&
          sectionBottom >= window.innerHeight / 2
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        const linkSectionId = link.getAttribute("href").substring(1);
        link.classList.remove("active", "active-hover");

        if (linkSectionId === currentSection) {
          link.classList.add("active");
          link.classList.add("active-hover");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="header">
      <a href="#top" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        <span>☰</span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            À Propos
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinkClick}>
            Compétences
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={handleLinkClick}>
            Projets
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

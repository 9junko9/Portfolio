import { useEffect } from "react";
import "./Header.scss";
import logo from "../../public/images/logoWhite.png";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navLinks = document.querySelectorAll(".nav-links a");
      const sections = Array.from(navLinks).map((link) => {
        const sectionId = link.getAttribute("href").substring(1);
        return document.getElementById(sectionId);
      });

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="header">
      <a href="#top" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

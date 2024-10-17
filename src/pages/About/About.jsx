import { FaGithub, FaLinkedin } from "react-icons/fa";
import photo from "/images/Jenny.webp";
import "./About.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="intro">
        <p className="intro-text">
          Bonjour, je suis <strong>Jennifer VERNET</strong> <br />
        </p>
        <h1 className="name">Développeuse Web Junior</h1>
      </div>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/jennifer-vernet-241a712ab/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/9junko9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <div className="separator"></div>
      <div className="presentation-container">
        <div className="presentation-text">
          <h2 className="presentation-title">À Propos</h2>
          <p className="bio">
            Admirative des nouvelles technologies et de l&apos;intelligence
            artificielle, je me suis mise à coder par passion dès 2023.
            J&apos;ai ensuite décidé de me reconvertir officiellement, afin
            d&apos;approfondir mes compétences. <br />
            <br /> J&apos;ai donc réalisé une formation diplômante
            d&apos;intégrateur web auprès d&apos;OpenClassrooms. Vous pourrez
            découvrir dans la section &quot;Mes projets&quot;, les différents
            travaux que j&apos;ai eu plaisir à accomplir pendant mon parcours.
            Ces derniers ont grandement participé au développement de mon
            savoir-faire. D&apos;autres projets seront concrétisés
            prochainement.
          </p>
        </div>
        <img src={photo} alt="Jennifer Vernet" className="profile-photo" />
      </div>
    </section>
  );
};

export default About;

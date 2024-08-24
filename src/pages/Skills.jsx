import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faGitAlt,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons/faJsSquare";
import viteLogo from "../assets/images/vite.svg";
import figmaLogo from "../assets/images/figma.svg";

import "./Skills.scss";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const Skills = () => (
  <section id="skills" className="section">
    <h2>Skills</h2>
    <div className="skills-icons">
      <div className="icon-wrapper" data-aos="fade-up">
        <FontAwesomeIcon
          icon={faReact}
          title="React"
          className="icon"
          style={{ color: "#61DAFB" }}
        />
        <p className="icon-label">React</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <FontAwesomeIcon
          icon={faJsSquare}
          title="JavaScript"
          className="icon"
          style={{ color: "#F7DF1E" }}
        />
        <p className="icon-label">JavaScript</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <FontAwesomeIcon
          icon={faHtml5}
          title="HTML"
          className="icon"
          style={{ color: "#E34F26" }}
        />
        <p className="icon-label">HTML</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <FontAwesomeIcon
          icon={faCss3Alt}
          title="CSS"
          className="icon"
          style={{ color: "#1572B6" }}
        />
        <p className="icon-label">CSS</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <FontAwesomeIcon
          icon={faSass}
          title="Sass"
          className="icon"
          style={{ color: "#CC6699" }}
        />
        <p className="icon-label">Sass</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <FontAwesomeIcon
          icon={faGitAlt}
          title="Git"
          className="icon"
          style={{ color: "#F1502F" }}
        />
        <p className="icon-label">Git</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <FontAwesomeIcon
          icon={faGithub}
          title="GitHub"
          className="icon"
          style={{ color: "#181717" }}
        />
        <p className="icon-label">GitHub</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <FontAwesomeIcon
          icon={faNodeJs}
          title="Node.js"
          className="icon"
          style={{ color: "#8CC84B" }}
        />
        <p className="icon-label">Node.js</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <img src={viteLogo} alt="Vite" className="icon" />
        <p className="icon-label">Vite</p>
      </div>
      <div className="icon-wrapper" data-aos="fade-up">
        <img src={figmaLogo} alt="Figma" className="icon" />
        <p className="icon-label">Figma</p>
      </div>
    </div>
  </section>
);

export default Skills;

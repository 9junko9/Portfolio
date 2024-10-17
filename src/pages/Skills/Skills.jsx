import icons from "../../data/icons";
import "./Skills.scss";
const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {icons.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div className="card" key={index}>
              <IconComponent color={skill.color} size="3em" />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

import { portfolio } from "../../data/data";
import Card from "../../components/Card/Card";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">Projets</h2>
      <div className="portfolio-container">
        {portfolio.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

import PropTypes from "prop-types";
import "./Tags.scss";

const Tags = ({ items, replaceByIcon }) => {
  return (
    <div className="tags">
      {items.map((item, index) => (
        <div key={`tag-${index}`} className="tags__item">
          {replaceByIcon ? (
            <img
              src={`/assets/icons/${item}.png`}
              alt={item}
              className="tags__icon"
            />
          ) : (
            <span>{item}</span>
          )}
        </div>
      ))}
    </div>
  );
};

Tags.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  replaceByIcon: PropTypes.bool,
};

export default Tags;

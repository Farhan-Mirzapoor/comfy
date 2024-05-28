import PropTypes from "prop-types";
import "./Button.css";

function Button({ title, link }) {
  return (
    <a href={link}>
      <button type="button">{title}</button>
    </a>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;

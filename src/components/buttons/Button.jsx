import PropTypes from "prop-types";

function Button({
  children,
  className = "primary-btn",
  type = "button",
  htmlType = "submit",
  disabled = false,
  onClick = () => {},
}) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      htmltype={htmlType}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["default", "link", "primary", "text", "dashed"]),
  htmlType: PropTypes.oneOf(["submit", "button"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;

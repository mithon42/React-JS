import PropTypes from "prop-types";

const Button = ({text, onClick, disabled, customStyle}) => {
  const disabledStyle = {
    backgroundColor: '#999',
    color: '#333',
    cursor: 'default',
  }

  const style = {
    padding: '2px 12px',
    outline: 'none',
    border: '1px solid gray',
    backgroundColor: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#000',
    marginLeft: '5px',
    fontSize: '14px',
    ...customStyle,
    ...(disabled && disabledStyle),
  }

  return (
    <button style={style} onClick={onClick} disabled={disabled}>{text}</button>
  )
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  customStyle: PropTypes.object,
};

Button.defaultProps = {
  customStyle: {},
  disabled: false,
};

export default Button;
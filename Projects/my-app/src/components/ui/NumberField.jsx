import PropTypes from 'prop-types';

const NumberField = ({value, name, onChange}) => {
  const style = {
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid gray',
    backgroundColor: '#fff',
    outline: 'none',
  };

  return (
    <input style={style} type="number" value={value} name={name} onChange={onChange}/>
  );
};

NumberField.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default NumberField;
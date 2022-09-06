import PropTypes from "prop-types";
import NumberField from "../ui/NumberField";

const InputSection = ({inputs, handleInputField}) => {

  return (
    <div>
      <p style={{fontWeight: 'bold'}}>Inputs</p>
      <NumberField value={inputs.a} name='a' onChange={handleInputField}/>
      <NumberField value={inputs.b} name='b' onChange={handleInputField}/>
    </div>
  )
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputField: PropTypes.func.isRequired,
}

export default InputSection;
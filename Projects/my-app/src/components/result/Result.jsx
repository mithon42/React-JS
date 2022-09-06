import PropTypes from "prop-types";

const Result = ({result}) => {
  const style = {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    borderRadius: '5px',
    padding: '10px 5px'
  }
  return  <h1 style={style}>Result= {result}</h1>
};
Result.propTypes = {
  result: PropTypes.number.isRequired,
}

export default Result;
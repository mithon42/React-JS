import PropTypes from "prop-types";
import Button from "../ui/Button";
import shortid from "shortid";


const OperationSection = ({handleArithmeticOps, handleClearOps}) => {

  const operations = [
    {
      id: shortid.generate(),
      text: '+',
      onClick: () => handleArithmeticOps('+'),
    },
    {
      id: shortid.generate(),
      text: '-',
      onClick: () => handleArithmeticOps('-'),
    },
    {
      id: shortid.generate(),
      text: '*',
      onClick: () => handleArithmeticOps('*'),
    },
    {
      id: shortid.generate(),
      text: '/',
      onClick: () => handleArithmeticOps('/'),
    },
    {
      id: shortid.generate(),
      text: '%',
      onClick: () => handleArithmeticOps('%'),
    },
    {
      id: shortid.generate(),
      text: 'clear',
      onClick: handleClearOps,
    },
  ];

  const style = {
    fontWeight: 'bold'
  };

  return (
    <div>
      <p style={style}>Operations</p>
      <div>
        {operations.map(ops => <Button key={ops.id} text={ops.text} onClick={ops.onClick}/>)}
      </div>
    </div>
  )
};

OperationSection.propTypes = {
  handleArithmeticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;

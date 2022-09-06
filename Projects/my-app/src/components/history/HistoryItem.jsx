import PropTypes from "prop-types";
import Button from "../ui/Button";

const HistoryItem = ({historyItem, disabled, handleRestoreBtn}) => {
  const style = {
    marginBottom: '5px'
  }

  return (
    <li key={historyItem.id}>
      <p style={style}>Operation: {historyItem.inputs.a} {historyItem.operations} {historyItem.inputs.b}, Result= {historyItem.result}</p>
      <small>
        {historyItem.date.toLocaleDateString()}
        {historyItem.date.toLocaleTimeString()}
      </small>

      <Button
        text="restore"
        onClick={() => handleRestoreBtn(historyItem)}
        disabled={disabled}
      />
      <hr/>
    </li>
  )
};

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    operations: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
  handleRestoreBtn: PropTypes.func.isRequired,
};
HistoryItem.default = {
  disabled: false,
};

export default HistoryItem;
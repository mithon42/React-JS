import HistoryItem from "./HistoryItem";
import PropTypes from "prop-types";

const HistorySection = ({histories, restoredHistory, handleRestoreBtn}) => {
  const style = {
    fontWeight: 'bold'
  }
  return (
    <div>
      <p style={style}>History</p>

      {histories.length === 0 ? (<p>
        <small>There is no history</small>
      </p> ) : (
        <ul style={{listStyleType: 'none'}}>
          {histories.map((historyItem) => (
            <HistoryItem 
              key={historyItem.id}
              disabled={restoredHistory === historyItem.id}
              historyItem={historyItem}
              handleRestoreBtn={handleRestoreBtn}
            />
          ))}
        </ul>
      )}

  </div>
  )
};

HistorySection.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }).isRequired,
      operation: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
    })
  ),
  handleRestoreBtn: PropTypes.func.isRequired,
  restoredHistory: PropTypes.number.isRequired,
};

export default HistorySection;
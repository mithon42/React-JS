
/**
 * DONE-1: Handle user input fields
 * DONE-2: Handle operations
 * DONE-3: Handle a list of histories
 * DONE-4: Render history list
 * DONE-5: Restore the history
*/

import { useState } from "react";
import Result from "./components/result/Result";
import InputSection from "./components/inputs/InputSection";
import OperationSection from "./components/operations/OperationSection";
import HistorySection from "./components/history/HistorySection";


// ID Generate
const getId = generateId();
function* generateId(){
  let id = 1;
  while (true){
    yield id++;
  }
}

// Initial Input State
const InitialInputState = {
  a: 10,
  b: 20
}


// App
const App = () => {
  const [inputState, setInputState] = useState({...InitialInputState});
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null)


  // Handle Input Fields
  const handleInputField = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: parseInt(event.target.value),
    });
  }

  // const handleFieldA = (event) => {
  //   setInputState({
  //     ...inputState,
  //     a: parseInt(event.target.value),
  //   });
  // }
  // const handleFieldB = (event) => {
  //   setInputState({
  //     ...inputState,
  //     b: parseInt(event.target.value),
  //   });
  // }

  // const handleInputField = (key, value) => {
  //   setInputState({
  //     ...inputState,
  //     [key]: value
  //   });
  // };

  // const handleInputField = (inp) => {
  //   setInputState({
  //     ...inputState, // Previous state
  //     ...inp // New state
  //   });
  // };


  // Handle Clear Option
  const handleClearOps = () => {
    setInputState({...InitialInputState})
    setResult(0);
  }


  // Arithmetic Operations
  const handleArithmeticOps = (operations) => {
    if(!inputState.a || !inputState.b){
      alert('Invalid Input')
      return;
    }
    const f = new Function(
      'operations',
      `
        return ${inputState.a} ${operations} ${inputState.b}
      `
    );
    const result = f(operations)
    setResult(result)
    // setResult(eval(`${inputState.a} ${operations} ${inputState.b}`));

    const historyItem = {
      id: getId.next().value,
      inputs: {...inputState},
      operations,
      result,
      date: new Date(),
    };
    setHistories([historyItem, ...histories]);
  };


  // Handle Restore Button
  const handleRestoreBtn = (historyItem) => {
    setInputState({...historyItem.inputs});
    setResult(historyItem.result)
    setRestoredHistory(historyItem);
  }

  const style = {
    width: '400px',
    margin: '10px auto',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    padding: '5px'
  }

  return (
    <div style={style}>
      <Result result={result}/>

      <InputSection inputs={inputState} handleInputField={handleInputField}/>

      <OperationSection handleArithmeticOps={handleArithmeticOps} handleClearOps={handleClearOps}/>
      
      <HistorySection histories={histories} handleRestoreBtn={handleRestoreBtn}restoredHistory={restoredHistory} />
    </div>
  )
}

export default App;
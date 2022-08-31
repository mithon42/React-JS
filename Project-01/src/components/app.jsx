import React, {Component} from 'react';
import './CSS/app.style.css';




class App extends Component{

  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({count: this.state.count + 1})
  };
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1})
    }
  }
 

  render(){
    return(
      <div className='App'>
        <h1 className='heading'>Simple Timer</h1>
        <div className="container">
          <button className='btn decrementBtn' onClick={this.decrementCount}>-</button>
          <span className='text'>{this.state.count}</span>
          <button className='btn incrementBtn' onClick={this.incrementCount}>+</button>
        </div>
        <div className="container">
          <button className='btn'>Start</button>
          <button className='btn'>Stop</button>
          <button className='btn'>Reset</button>
        </div>
      </div>
    )
  }
  
}
export default App;
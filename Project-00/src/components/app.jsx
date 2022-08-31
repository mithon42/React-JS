import React from 'react';

import Profile from './profile';
import Skills from './profile/skills';

class App extends React.Component{
  
  render(){
    return (
      <div className='App'>
        <Profile/>

        <div className='Container'>
          <h3 style={{marginBottom: '10px'}}>List Of Programmers.</h3>
          <p>Mr. X</p>
          <Skills/>

          <p>Mr. Y</p>
          <Skills/>
        </div>
      </div>
    ) 
  }
}

export default App



// Data And Logic Layer (Optional)
  /**
   * 1. State
   * 2. Variables Or Properties
   * 3. Functions Or Methods
   * 4. Life Cycle Methods
  */

  // Representation Layer (Required)
  /**
   * 5. JSX
  */
import React, {Component } from 'react';


class App extends Component {
  render(){
    const numbers = [1,1,2,3,4,5]
    return(
      <div className="App">
        {numbers.map((number, index) => {
          return <p key={index}>Soy el numero {number}</p>
        })}
      </div>
    );
  }
}

export default App;
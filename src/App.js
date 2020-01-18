import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props)
    this.borderColor = '#09f'
  }
  render() {
    return(
      <button style={{borderColor: this.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
    )
  }
}

class App extends Component {
  render (){
    return (
      <div className="App">
        <h4>Composicion vs Herencia</h4>
        <Button label='Click aqui'/>
      </div>
    );
  }
}

export default App;
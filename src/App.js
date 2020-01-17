import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//function Hello (props){
//  return <h2>{props.title}</h2>
//}

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render () {
        const textoSegunBool = this.props.isActivated ? 'on' : 'off';

      return (
        <div>
            <p>{this.props.text}</p>
            <p>{this.props.number}</p>
            <p>{this.props.arrayOfNumbers}</p>
        </div>
    )
  }
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src="" alt=""/>
          <Hello title='Hello from props'/>
        </div>
        <Text
          arrayOfNumbers={[2,3,10]}
          number={2}
          text='Texto en string'
          isActivated/>
      </div>
    );
  }
}

export default App;

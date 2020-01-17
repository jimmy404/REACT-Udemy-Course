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

class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src="" alt=""/>
          <Hello title='Hello from props'/>
        </div>
        <h3>Aprendiendo React</h3>
        <p>Hola mundo</p>
        <strong>Esto es un strong</strong>
      </div>
    );
  }
}

export default App;

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
        const {isActivated,arrayOfNumbers, multiply, objectWithInfo} = this.props
        const textoSegunBool = isActivated ? 'on' : 'off';
        const mappedNumbers = arrayOfNumbers.map(n => n*2)

      return (
        <div>
            <p>{arrayOfNumbers}</p>
            <p>{mappedNumbers.join(' , ')}</p>
            <p>{objectWithInfo.key}</p>
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
          objectWithInfo={{key: 'value', key2: 'otherValue'}}
          number={2}
          multiply={(number) => number *4}
          text='Texto en string'
          isActivated/>
      </div>
    );
  }
}

export default App;

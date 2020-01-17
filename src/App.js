import React, { Component } from 'react';
//import logo from './logo.svg';
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
        const {
          arrayOfNumbers,
          multiply,
          objectWithInfo,
          title
        } = this.props

        const mappedNumbers = arrayOfNumbers.map(n => n*2)

      return (
        <div>
        {title}
            <p>{mappedNumbers.join(' ,')}</p>
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
          multiply={(number) => number *4}
          number={2}
          text='Texto en string'
          title={<h1>Este es el titulo</h1>}
          />
      </div>
    );
  }
}

export default App;

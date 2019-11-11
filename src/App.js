import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import { inherits } from 'util';

class App extends Component {

  state = {
    persons: [
      { name: "George", age: 28 },
      { name: "Panos", age: 22 },
      { name: "Nikos", age: 11 }
    ]
  }

   switchNameHandler = (newName) => {
    this.setState({
      persons:[
        { name: newName, age: 28 },
        { name: "Giannoss", age: 22 },
        { name: "Nikos", age: 111 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        { name: "Gianno", age: 28 },
        { name: event.target.value, age: 22 },
        { name: "Nikos", age: 111 }
      ]
    })

  }

  render() {
    const style = {
      backgroundColor:'white',
      font: 'inherit',
      border:'1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
      <button onClick ={this.switchNameHandler.bind(this,'Ante gamisou paidaki')} style = {style} >Switch Names</button>
        
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed = {this.nameChangeHandler} />


        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null, 'Hi noobs'));
  }
}

export default App;

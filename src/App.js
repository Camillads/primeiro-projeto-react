import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Teste from './Teste';

class App extends Component {
  // props são as propriedades do pai
  constructor(props) {
    super(props);
    this.state = { name: 'Camilla' }; // estado da aplicação

    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  // function para modificar o estado da aplicação
  changeState() {
    this.setState({ name: "Camilla Damasceno" });
  }

  resetState() {
    this.setState({ name: "Camilla" });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.name}
        </div>
        <button onClick={this.changeState}> Mudar estado </button>
        <button onClick={this.resetState}> Resetar estado </button>
      </div>
    );
  }
}

export default App;

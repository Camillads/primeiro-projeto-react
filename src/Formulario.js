import React, { Component } from 'react';
import './App.css';

class Formulario extends Component {
  // props são as propriedades do pai
  constructor(props) {
    super(props);
    this.state = {
      name: 'Camilla',
      email: "camilladamascenos@hotmail.com"
    }; // estado da aplicação

    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  // function para modificar o estado da aplicação
  changeState() {
    this.setState({
      name: "Camilla Damasceno"
    });
  }

  resetState() {
    this.setState({ name: "Camilla" });
  }

  changeInput(event) {
    let target = event.target;
    let index = target.name;

    this.setState({
      [index]: target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <form>
            <label>Nome:
              <input type="text" name="name" value={this.state.name} onChange={this.changeInput}></input>
            </label>
            <label>E-mail:
              <input type="email" name="email" value={this.state.email} onChange={this.changeInput}></input>
            </label>
          </form>
          {this.state.name} - {this.state.email}
        </div>
        
        <button onClick={this.changeState}> Mudar estado </button>
        <button onClick={this.resetState}> Resetar estado </button>
      </div>
    );
  }
}

export default Formulario;

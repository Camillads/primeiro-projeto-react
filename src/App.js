import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Teste from './Teste';
import Formulario from './Formulario';
import List from './List';

class App extends Component {

  render() {
    return (
      <div>
        <Formulario></Formulario>
        <List></List>
      </div>
    );
  }
}

export default App;

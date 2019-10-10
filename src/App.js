import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Teste from './Teste';
import Formulario from './Formulario';
import User from './pages/user/User';

class App extends Component {

  render() {
    return (
      <div>
        <Formulario></Formulario>
        <User></User>
      </div>
    );
  }
}

export default App;

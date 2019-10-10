import React, { Component } from 'react';
import Menu from './pages/Menu/Menu';
import Formulario from './Formulario';

class App extends Component {
  render() {
    return (
      <div>
        <Formulario></Formulario>
        <Menu></Menu>
      </div>
    );
  }
}

export default App;

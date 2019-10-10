import React, { Component } from 'react';
//import './Teste.css';

class Teste extends Component {
    render() {
        return (
            <div>
                <div>
                    Testando passagem de valores para componentes.
            </div>
                <div>Nome: {this.props.name}</div>
            </div>
        );
    }
}

export default Teste;

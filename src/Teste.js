import React, { Component } from 'react';
//import './Teste.css';

class Teste extends Component {
    // props são as propriedades do pai
    constructor(props) {
        super(props);
        this.state = { name: 'Camilla' }; // estado da aplicação
    }

    // function para modificar o estado da aplicação
    changeState() {
        this.setState({name: 'Camilla Damasceno'});
    }

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

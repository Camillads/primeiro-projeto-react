import React, { Component } from 'react';

class List extends Component {
    render() {
        let list = [
            {
                name: "Camilla",
                email: "camilladamascenos@hotmail.com"
            },

            {
                name: "Anna",
                email: "anna@hotmail.com"
            }
        ];
        return (
            // renderiza os itens na tela, um a um
            <div>
                <table border="1">
                    <tr>
                        <th>Nome: </th>
                        <th>Email: </th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        );
    }
}

export default List;

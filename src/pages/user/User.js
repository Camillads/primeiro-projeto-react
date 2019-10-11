import React, { Component } from 'react';
import UserForm from './UserForm';

class User extends Component {
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
                <UserForm></UserForm>
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

export default User;

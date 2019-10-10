import React, { Component } from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import routesConfig from '../../RoutesConfig';


class Menu extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
          </div>

          {routesConfig.map((value, key) => {
            return <Route
              key={key}
              path={value.path}
              component={value.component}
              exact={value.exact}>
            </Route>
          })}
        </BrowserRouter>
      </div>
    );
  }
}

export default Menu;

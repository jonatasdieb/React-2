import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Departamento from './Components/Departamento/Departamento';
import Funcionario from './Components/Funcionario/Funcionario';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link text-light" to='/'>Despesas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to='/departamento'>Departamentos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to='/funcionario'>Funcionários</Link>
                </li>               
              </ul>
            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route exact path='/departamento' component={Departamento} />
          <Route exact path='/funcionario' component={Funcionario} />          
        </div>
      </Router >
    );
  }
}
export default App;

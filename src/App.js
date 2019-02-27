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
          <nav className="navbar bg-dark">
            <Link className="nav-link text-light" to='/'>Home</Link>
            <Link className="nav-link text-light" to='/departamento'>Departamentos</Link>
            <Link className="nav-link text-light" to='/funcionario'>Funcionários</Link>
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

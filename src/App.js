import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Departamento from './Components/Departamento/Departamento';
import Funcionario from './Components/Funcionario/Funcionario';
import { getUsername } from './Services/AuthService';
import { logout } from './Services/AuthService';

class App extends Component {

    logout() {
        logout();
        window.location.replace("/");
    }

    render() {
        return (
            <Router>
                <div>
                    <div className='row'>
                        <a className='float-right' href='#' onClick={this.logout}>Logout</a>
                    </div>
                    <div class='row'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-nav">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link text-light" to='/'><i class="fas fa-dollar-sign text-white"></i> Despesas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to='/departamento'><i class="fas fa-briefcase text-white"></i> Departamentos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-light" to='/funcionario'><i class="fas fa-users text-white"></i> Funcionários</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/departamento' component={Departamento} />
                        <Route exact path='/funcionario' component={Funcionario} />
                    </div>
                </div>
            </Router >
        );
    }
}
export default App;

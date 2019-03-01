import React, { Component } from 'react';
import { login, saveData } from '../../Services/AuthService';

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
                messages: false,
                errors: false
            }
        }

    login = () => {
        login({
            username: this.refs.username.value,
            password: this.refs.password.value
        }).then(res =>
            saveData(res.data)
        ).then(() =>
            window.location.reload()
        ).catch(() =>
                this.setState({
                    errors: "Dados de autenticação incorretos."
                })
            )
    }

    render() {
        return (
            <section>
                <div className="row justify-content-md-center">
                {this.state.errors &&
                <div className="text-danger">
                    <p>
                        <b>{this.state.errors}</b>
                    </p>
                </div>
                }
                 </div>
                <div className="row justify-content-md-center">
                    <h3>Efetuar login</h3>
                </div>
                <div className="row justify-content-md-center">
                    <form className="col-8">
                        <div className="form-group">
                            <label>Usuário</label>
                            <input type="text" className="form-control" ref='username' name="usuario" id="usuario" placeholder="Usuário" />
                        </div>
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" ref='password' name="senha" id="senha" placeholder="Senha" />
                        </div>
                        <div className="form-group">
                            <input type="button" className="btn btn-primary" onClick={this.login} value='Login' />
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Login;
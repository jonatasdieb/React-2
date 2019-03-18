import React, { Component } from 'react';
import { saveToken } from '../../Services/AuthService';
import userService from '../../Services/UserService';
import CadastrarUsuario from './CadastrarUsuario';
import Messages from '../../Features/ValidationMessages';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            messages: false,
            errors: false
        }
    }

    login = (e) => {
        e.preventDefault();

        this.setState({
            isLoading: true
        })

        userService.login({
            username: this.refs.username.value,
            password: this.refs.password.value
        }).then(res =>
            saveToken(res.data.token)
        ).then(() =>
            window.location.reload()
        ).catch(() =>
            this.setState({
                errors: [{ message: "Dados de autenticação incorretos." }],
                messages: false,
                isLoading: false
            })
        )
    }

    showMessages = (messages, tipo) => {
        if (tipo === 'nok') {
            this.setState({
                errors: messages,
                messages: false,
                isLoading: false
            })
        }

        else if (tipo === 'ok') {
            this.setState({
                errors: false,
                messages: messages,
                isLoading: false
            })
        }
    }


    render() {
        return (
            <section>
                    <div className="row mt-3">
                        <div className="col-12">
                            {
                                this.state.errors &&
                                <div class="alert alert-danger" role="alert">
                                    <ul>
                                        {this.state.errors.map((value, index) =>
                                            <li key={index}>{value.message}</li>
                                        )}
                                    </ul>
                                </div>
                            }
                            {
                                this.state.messages &&
                                <div class="alert alert-success" role="alert">
                                    <ul>
                                        <li>{this.state.messages}</li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>

                <div className="row justify-content-md-center">

                
                    {/* modal de cadastro de usuários */}
                    <CadastrarUsuario getMessages={(messages, tipo) => this.showMessages(messages, tipo)} />
                </div>
                <div className="row justify-content-md-center">
                    <h3>Efetuar login</h3>
                </div>
                <div className="row justify-content-md-center">
                    <form className="col-8" onSubmit={this.login}>
                        <div className="form-group">
                            <label>Usuário</label>
                            <input type="text" className="form-control" ref='username' name="usuario" id="usuario" placeholder="Usuário" />
                        </div>
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" ref='password' name="senha" id="senha" placeholder="Senha" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Login <i class="fas fa-sign-in-alt text-white"></i>
                            </button> &nbsp;
                            <button type="button" className="btn btn-warning text-white" data-toggle="modal" data-target="#modalCadastrarUsuario">
                                Cadastrar <i class="fas fa-user-plus text-white"></i>
                            </button>
                        </div>
                    </form>
                </div>
                {
                    this.state.isLoading &&
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ "width": "100%" }}>Buscando seus dados...</div>
                    </div>
                }
            </section>
        )
    }
}

export default Login;
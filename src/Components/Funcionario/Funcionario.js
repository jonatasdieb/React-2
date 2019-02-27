import React, { Component } from 'react';
import NovoFuncionario from './NovoFuncionario';
import funcionarioService from '../../Services/FuncionarioService';
import Messages from '../../Features/ValidationMessages';

class Funcionario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            funcionarios: [],
            errors: false,
            messages: false
        }
    }

    showMessages = (messages, tipo) => {
        if (tipo === 1) {
            this.setState({
                errors: messages
            })
        }
        else if (tipo === 0) {
            this.setState({
                messages: messages,
                isLoading: true
            })
            funcionarioService.getFuncionarios()
                .then(res =>
                    this.setState({
                        funcionarios: res.data,
                        isLoading: false
                    })
                )
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })

        funcionarioService.getFuncionarios()
            .then(res =>
                this.setState({
                    funcionarios: res.data,
                    isLoading: false
                })
            )
    }

    render() {
        return (
            <div>
               <Messages messages={this.state.messages} errors={this.state.errors}/>

                <h3 className="text-center mt-5">Funcionários</h3>
                <NovoFuncionario getMessages={(messages, tipo) => this.showMessages(messages, tipo)} />
                <table className="table table-sm table-hover mt-5">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Departamento</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.funcionarios.map(value => {
                            return (
                                <tr key={value.Id}>
                                    <td>{value.Id}</td>
                                    <td>{value.Nome}</td>
                                    <td>{value.Departamento.Nome}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {
                    this.state.isLoading &&
                    <div className="row justify-content-center ">
                        <div className="spinner-border text-danger mt-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            </div >
        )
    }

}

export default Funcionario;
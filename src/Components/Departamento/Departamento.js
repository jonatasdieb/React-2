import React, { Component } from 'react';
import NovoDepartamento from './NovoDepartamento';
import departamentoService from '../../Services/DepartamentoService';
import Messages from '../../Features/ValidationMessages';

class Departamento extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            departamentos: [],
            messages: false,
            errors: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        departamentoService.getDepartamentos()
            .then(res => this.setState({
                departamentos: res.data,
                isLoading: false
            }))
    }

    showMessages = (messages, tipo) => {       
        if (tipo === 'nok') {
            this.setState({
                errors: messages,
                messages: false
            })
        }

        else if (tipo === 'ok') {
            this.setState({
                errors: false,
                messages: messages,
                isLoading: true
            })

            departamentoService.getDepartamentos()
                .then(res =>
                    this.setState({
                        departamentos: res.data,
                        isLoading: false
                    })
                )
        }
    }

    render() {
        return (
            <div>
                
                <Messages messages={this.state.messages} errors={this.state.errors} />

                <h3 className="text-center mt-4">Departamentos</h3>

                <NovoDepartamento getMessages={(messages, tipo) => this.showMessages(messages, tipo)}></NovoDepartamento>

                <table className="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.departamentos.map(value => {
                            return (
                                <tr key={value.Id}>
                                    <td>{value.Id}</td>
                                    <td>{value.Nome}</td>
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
            </div>
        )
    }

}

export default Departamento;
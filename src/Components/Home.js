import React, { Component } from 'react';
import custoService from '../Services/CustoService';
import FiltroCusto from '../Components/Custo/FiltroCusto';
import NovoCusto from './Custo/NovoCusto';
import Messages from '../Features/ValidationMessages';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            tipoFiltro: false,
            custoFiltro: [],
            custos: [],
            messages: false,
            errors: false
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        custoService.getCustos()
            .then(res => this.setState({
                custos: res.data,
                isLoading: false
            }))
    }

    showMessages = (messages, tipo) => {
        console.log(messages);
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
        }
        
        custoService.getCustos()
            .then(res =>
                this.setState({
                    custos: res.data,
                    tipoFiltro: false,
                    isLoading: false
                })
            )
    }

    render() {
        return (
            <div>
                <Messages messages={this.state.messages} errors={this.state.errors} />

                <h3 className="text-center mt-4">Despesas</h3>

                <NovoCusto getMessages={(messages, tipo) => this.showMessages(messages, tipo)} />

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalNovoCusto">
                    Nova Despesa
                </button>

                <FiltroCusto filtrarCustos={(custos) => this.setState({ custos: custos })} />

                <table className='table table-sm table-hover mt-2'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Funcionário</th>
                            <th>Departamento</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.custos.map((value) => {
                            return (
                                <tr key={value.Id}>
                                    <td>{value.Id}</td>
                                    <td>{value.Funcionario.Nome}</td>
                                    <td>{value.Departamento.Nome}</td>
                                    <td>{value.Descricao}</td>
                                    <td>{value.Valor.toFixed(2)}</td>
                                </tr>
                            )
                        }
                        )}
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

export default Home;
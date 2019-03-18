import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as custoActions from '../../Store/Custo/actions';
import * as departamentoActions from '../../Store/Departamento/actions';
import * as funcionarioActions from '../../Store/Funcionario/actions';

class NovoCusto extends Component {  

    componentDidMount() {
        this.props.getDepartamentos()
    }

    onChange = () => {
        this.props.getFuncionariosByDepartamentoId(this.refs.departamento.value)            
    }

    novoCusto = () => {
        var custo = {
            DepartamentoId: this.refs.departamento.value,
            FuncionarioId: this.refs.funcionario.value,
            Descricao: this.refs.descricao.value,
            Valor: this.refs.valor.value,
        }

        this.props.novoCusto(custo)           

        //limpa formulário
        this.refs.departamento.value = '';
        this.refs.funcionario.value = ''
        this.refs.descricao.value = '';
        this.refs.valor.value = '';
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="modalNovoCusto" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Nova Despesa</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Departamento</label>
                                        <select ref='departamento' className='custom-select' onChange={this.onChange} required>
                                            <option value=''>-</option>
                                            {this.props.departamentos.data.map((value) => {
                                                return (
                                                    <option key={value.Id} value={value.Id}>{value.Nome}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Funcionario</label>
                                        <select ref='funcionario' className='custom-select' required>
                                            <option value=''>-</option>
                                            {this.props.funcionarios.data.map((value) => {
                                                return (
                                                    <option key={value.Id} value={value.Id}>{value.Nome}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Descrição</label>
                                        <input type="text" ref="descricao" className="form-control" placeholder="Ex.: Caneta" required maxLength="500" />
                                    </div>
                                    <div className="form-group">
                                        <label>Valor</label>
                                        <input type="number" ref="valor" className="form-control" placeholder="Valor do produto" required />
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar <i class="fas fa-times-circle text-white"></i></button>
                                    <button type="submit" className="btn btn-primary" onClick={this.novoCusto} data-dismiss="modal">Salvar <i class="fas fa-check text-white"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    departamentos: state.departamentos,
    funcionarios: state.funcionarios
})

const mapDispatchToProps = {
    ...custoActions,
    ...departamentoActions,
    ...funcionarioActions
}

export default connect(mapStateToProps, mapDispatchToProps)(NovoCusto);
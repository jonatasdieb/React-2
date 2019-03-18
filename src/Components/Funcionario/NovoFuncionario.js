import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as funcionarioActions from '../../Store/Funcionario/actions';
import * as departamentoActions from '../../Store/Departamento/actions';


class NovoFuncionario extends Component {

    novoFuncionario = () => {

        this.props.novoFuncionario({
            Nome: this.refs.nome.value,
            DepartamentoId: this.refs.departamento.value
        })

        //limpa formulários
        this.refs.nome.value = '';
        this.refs.departamento.value = '';
    }

    componentDidMount() {
        this.props.getDepartamentos();
    }

    render() {
        return (
            <div>
                <form className="form-inline float-right mt-3">
                    <div className="form-group">
                        <label>Novo funcionário: &nbsp;</label>
                        <input type="text" ref='nome' className='form-control' placeholder="Nome" required />
                    </div>
                    <div className="form-group">
                        <select ref='departamento' className='custom-select'>
                            <option value=''>Selecione um departamento</option>
                            {this.props.departamentos.data.map((value) => {
                                return (
                                    <option key={value.Id} value={value.Id}>{value.Nome}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group">&nbsp;
                    <button type='button' className='btn btn-succ' onClick={this.novoFuncionario}>Salvar <i class="fas fa-check text-white"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    departamentos: state.departamentos,
    funcionarios: state.funcionarios
});

const mapDispatchToProps = {
    ...funcionarioActions,
    ...departamentoActions
}
    
// bindActionCreators(funcionarioActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NovoFuncionario);
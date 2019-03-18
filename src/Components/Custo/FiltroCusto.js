import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as custoActions from '../../Store/Custo/actions';
import * as funcionarioActions from '../../Store/Funcionario/actions';

class FiltroCusto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tipoFiltro: false,
            custoFiltro: [],
        }
    }    

    loadFuncionarios() {
        this.props.getFuncionarios()
        
        this.setState({
            tipoFiltro: 'funcionario'       
        })
    }

    /*Atualiza campo de pesquisa de acordo
      com tipo de filtro escolhido pelo usuário*/
    onChange = () => {
        if (this.refs.filtro.value === 'descricao') {
            this.setState({
                tipoFiltro: 'descricao'
            })
        }
        else if (this.refs.filtro.value === 'funcionario') {
            this.loadFuncionarios();
        } else {
            this.setState({
                tipoFiltro: false
            })
        }
    }

    filtrar = (e) => {
        e.preventDefault();

        if (this.state.tipoFiltro === 'funcionario') { 
            this.props.getCustosByFuncionarioId(this.refs.filtroId.value)
        }
        else if (this.state.tipoFiltro === 'descricao') {

            //se a descricao for vazia, retornará todos os custos
            if (this.refs.descricao.value === '') {
                this.props.getCustos()
            } else {
                this.props.getCustosByDescricao(this.refs.descricao.value);
            }
        }
        else {
            this.props.getCustos()
        }
    }

    render() {
        return (
            <form className='form-inline float-right' onSubmit={this.filtrar}>
                Filtrar por: &nbsp;
            <div className='form-group'>
                    <select ref='filtro' onChange={this.onChange} className='custom-select'>
                        <option value='0'> Selecionar </option>
                        <option value="funcionario"> Funcionário </option>
                        <option value="descricao"> Descrição </option>
                    </select>
                </div>
                <div className='form-group'>
                    {
                        this.state.tipoFiltro === 'funcionario' &&
                        <select ref='filtroId' className='custom-select'>
                            {this.props.funcionarios.data.map(value =>
                                <option key={value.Id} value={value.Id}> {value.Nome} | {value.Departamento.Nome}</option>
                            )}
                        </select>
                    }
                    {
                        this.state.tipoFiltro === 'descricao' &&
                        <div className='form-group'>
                            <input type='text' ref='descricao' className='form-control' placeholder="Descrição" />
                        </div>
                    }
                </div>&nbsp;
            <button type='submit' className="btn btn-default border-info">Filtrar</button>
            </form>
        )
    }

}

const mapStateToProps = state => ({
    custos: state.custos,
    funcionarios: state.funcionarios
})

const mapDispatchToProps = {
    ...custoActions,
    ...funcionarioActions
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltroCusto);
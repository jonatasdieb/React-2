import React, { Component } from 'react';
import custoService from '../../Services/CustoService';
import funcionarioService from '../../Services/FuncionarioService';

class FiltroCusto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tipoFiltro: false,
            custoFiltro: [],
        }
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
            funcionarioService.getFuncionarios().then(res => this.setState({
                tipoFiltro: 'funcionario',
                custoFiltro: res.data
            }))
        }
    }

    filtrar = () => {
        if (this.state.tipoFiltro === 'funcionario') {
            console.log(this.refs.filtroId.value);
            custoService.getCustoByFuncionarioId(this.refs.filtroId.value)
                .then(res => this.props.filtrarCustos(res.data))
        }
        else if (this.state.tipoFiltro === 'descricao') {

            //se a descricao for vazia, retornará todos os custos
            if (this.refs.descricao.value === '') {
                custoService.getCustos()
                    .then(res => this.props.filtrarCustos(res.data))
            } else {
                custoService.getCustoByDescricao(this.refs.descricao.value)
                    .then(res => this.props.filtrarCustos(res.data))
            }
        }

        else {
            funcionarioService.getCustos()
                .then(res => this.props.filtrarCustos(res.data))
        }
    }

    render() {
        return (
            <form className='form-inline float-right'>
                Filtrar por: &nbsp;
            <div className='form-group'>
                    <select ref='filtro' onChange={this.onChange} className='custom-select'>
                        <option> Selecionar </option>
                        <option value="funcionario"> Funcionário </option>
                        <option value="descricao"> Descrição </option>
                    </select>
                </div>
                <div className='form-group'>
                    {
                        this.state.tipoFiltro === 'funcionario' &&
                        <select ref='filtroId' className='custom-select'>
                            {this.state.custoFiltro.map(value =>
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
            <button type='button' className="btn btn-default border-info" onClick={this.filtrar}>Filtrar</button>
            </form>
        )
    }


}

export default FiltroCusto;
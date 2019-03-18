import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as custoActions from '../Store/Custo/actions';

import FiltroCusto from '../Components/Custo/FiltroCusto';
import NovoCusto from './Custo/NovoCusto';




class Home extends Component {
   
    loadCustos() {
       
    }

    componentDidMount() {
       this.props.getCustos()
    }

   

    render() {
        return (
            <div>

                <h3 className="text-center mt-4">Despesas</h3>
                  
              
                    <NovoCusto />    
                   
                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modalNovoCusto">
                       Nova <i className="fas fa-plus text-white"></i>
                    </button>
                     &nbsp;    

                    <FiltroCusto />
              
                <table className='table table-sm table-hover table-light table-bordered mt-2'>
                    <thead className="bg-table text-light">
                        <tr>
                            <th>Funcionário</th>
                            <th>Departamento</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.custos.data.map((value) => {
                            return (
                                <tr key={value.Id}>
                                    <td>{value.Funcionario.Nome}</td>
                                    <td>{value.Departamento.Nome}</td>
                                    <td>{value.Descricao}</td>
                                    <td>R$ {value.Valor.toFixed(2)}</td>
                                </tr>
                            )
                         })
                        }
                    </tbody>
                </table>
                {
                    this.props.custos.isLoading &&
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

const mapStateToProps = state => ({
    custos: state.custos
})

const mapDispatchToProps = {
    ...custoActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
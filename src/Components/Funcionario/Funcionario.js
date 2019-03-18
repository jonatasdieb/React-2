import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NovoFuncionario from './NovoFuncionario';
import * as funcionarioActions from '../../Store/Funcionario/actions';



class Funcionario extends Component {  

    componentDidMount(){          
        this.props.getFuncionarios();
    }

    render() {
        return (
            <div>   
                <h3 className="text-center mt-4">Funcionários</h3>               
                <NovoFuncionario/>
                
                <table className='table table-sm table-hover table-light table-bordered mt-2'>
                    <thead className="bg-table text-light">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Departamento</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.props.funcionarios.data.map(value => {
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
                    this.props.funcionarios.isLoading &&
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

const mapStateToProps = state => ({ 
    funcionarios: state.funcionarios
  });  

const mapDispatchToProps = dispatch => 
  bindActionCreators(funcionarioActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Funcionario);
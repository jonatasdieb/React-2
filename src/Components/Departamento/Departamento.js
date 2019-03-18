import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as departamentoActions from '../../Store/Departamento/actions';
import * as validationMessagesActions from '../../Store/ValidationMessages/actions';
import NovoDepartamento from './NovoDepartamento';

class Departamento extends Component {     

    componentDidMount(){
        this.props.getDepartamentos();       
    }
   
    render(){
        return(            
            <div>                
                <h3 className="text-center mt-4">Departamentos</h3>              
             
                <NovoDepartamento />
                <table className='table table-sm table-hover table-light table-bordered mt-2'>
                    <thead className="bg-table text-light">
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                        </tr>

                    </thead>
                    <tbody>
                        { this.props.departamentos.data.map(value => {
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
                    this.props.departamentos.isLoading &&
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
    departamentos: state.departamentos
  });  

const mapDispatchToProps = {
    ...departamentoActions,
    ...validationMessagesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Departamento);

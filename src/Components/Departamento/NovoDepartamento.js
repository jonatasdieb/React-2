import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as departamentoActions from '../../Store/Departamento/actions';



class NovoDepartamento extends Component {

    novoDepartamento = (e) => {
        e.preventDefault();        

        this.props.novoDepartamento({
            Nome: this.refs.nome.value
        });

        this.refs.nome.value = '';
    }

    render() {
        return (
            <div className='float-right'>
                <form className='form-inline' onSubmit={this.novoDepartamento}>
                    <div className="form-group">
                        <label>Novo departamento: &nbsp;</label>
                        <input ref='nome' type="text" className="form-control" placeholder="Nome do departamento" />
                    </div>
                    &nbsp; <button type="submit" className="btn btn-succ">Salvar <i class="fas fa-check text-white"></i></button>
                </form>
            </div>

        )
    }

}
const mapStateToProps = state => ({
    departamentos: state.departamentos
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(departamentoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NovoDepartamento);
/*
Componente responsável por exibir mensagens de erro de validação de formulário 
e mensagem de sucesso nos cadastros em geral.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as validationMessagesActions from '../Store/ValidationMessages/actions'

class ValidationMessages extends Component {


    render() {
        return (
            <div className="row mt-3">
                <div className="col-12">
                    {
                        this.props.errors &&
                        <div class="alert alert-danger" role="alert">
                            <ul>
                                {this.props.errors.map((value, index) =>
                                    <li key={index}>{value.message}</li>
                                )}
                            </ul>
                        </div>
                    }
                    {
                        this.props.messages &&
                        <div class="alert alert-success" role="alert">
                            <ul>
                                <li>{this.props.messages}</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }


}
const mapStateToProps = state => ({
    errors: state.validationMessages.errors,
    messages: state.validationMessages.messages
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(validationMessagesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ValidationMessages);

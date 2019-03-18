import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import funcionarioService from '../../Services/FuncionarioService'

function* getFuncionarios() { 
  try {    
    const response = yield call(funcionarioService.getFuncionarios);
    yield put({ type: 'SUCCESS_GET_FUNCIONARIOS', payload: { data: response.data } });
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* getFuncionariosByDepartamentoId(action) {  
  try {    
    const response = yield funcionarioService.getFuncionariosByDepartamentoId(action.action);    
    yield put({ type: 'SUCCESS_GET_FUNCIONARIOS', payload: { data: response.data } });
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* novoFuncionario(action) {
  const funcionario = action.action;  
  try {
    yield funcionarioService.novoFuncionario(funcionario);
    yield getFuncionarios();
    yield put({ type: 'SUCCESS_NOVO_FUNCIONARIO'});
    yield put({ type: 'REQUEST_SUCCESS', payload: { messages: "Funcionário cadastrado com sucesso." } })
   
  }
  catch (err) {     
    const errors = yield err; 
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

export default function* funcionarioSagas() {
  yield takeEvery('GET_FUNCIONARIOS', getFuncionarios);
  yield takeEvery('GET_FUNCIONARIOS_BY_DEPARTAMENTOID', getFuncionariosByDepartamentoId)
  yield takeLatest('NOVO_FUNCIONARIO', novoFuncionario);
}
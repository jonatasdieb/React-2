import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import custoService from '../../Services/CustoService'

function* getCustos() {   
  try {    
    const response = yield call(custoService.getCustos);
    yield put({ type: 'SUCCESS_GET_CUSTOS', payload: { data: response.data } });   
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* getCustosByFuncionarioId(action) {   
  try {    
    const response = yield custoService.getCustosByFuncionarioId(action.action);
    yield put({ type: 'SUCCESS_GET_CUSTOS', payload: { data: response.data } });   
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* getCustosByDescricao(action) {   
  try {    
    const response = yield custoService.getCustosByDescricao(action.action);
    yield put({ type: 'SUCCESS_GET_CUSTOS', payload: { data: response.data } });   
    yield put({ type: 'CLEAR_MESSAGES'});
  } catch (err) {    
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* novoCusto(action) {
  const custo = action.action;  
  try {
    yield custoService.novoCusto(custo);
    yield getCustos();
    yield put({ type: 'SUCCESS_NOVO_CUSTO'});
    yield put({ type: 'REQUEST_SUCCESS', payload: { messages: "Despesa registrada com sucesso." } })
    
  }
  catch (err) {     
    const errors = yield err; 
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

export default function* custoSagas() {
  yield takeEvery('GET_CUSTOS', getCustos);
  yield takeEvery('GET_CUSTOS_BY_FUNCIONARIOID', getCustosByFuncionarioId);
  yield takeEvery('GET_CUSTOS_BY_DESCRICAO', getCustosByDescricao);
  yield takeLatest('NOVO_CUSTO', novoCusto);
}
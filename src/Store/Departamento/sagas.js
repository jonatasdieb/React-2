import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import departamentoService from '../../Services/DepartamentoService'

function* getDepartamentos() {
  try {
    const response = yield call(departamentoService.getDepartamentos);
    yield put({ type: 'SUCCESS_GET_DEPARTAMENTOS', payload: { data: response.data } });  
    yield put({ type: 'CLEAR_MESSAGES'}); 
  } catch (err) {
    const errors = yield err;
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

function* novoDepartamento(action) {
  const departamento = action.action;  
  try {
    yield departamentoService.novoDepartamento(departamento);
    yield getDepartamentos();
    yield put({ type: 'SUCCESS_NOVO_DEPARTAMENTO'});
    yield put({ type: 'REQUEST_SUCCESS', payload: { messages: "Departamento cadastrado com sucesso." } })
    
  }
  catch (err) {     
    const errors = yield err;       
    yield put({ type: 'REQUEST_FAILURE', payload: { errors: errors.response.data } });
  }
}

export default function* departamentoSagas() {
  yield takeEvery('GET_DEPARTAMENTOS', getDepartamentos);
  yield takeLatest('NOVO_DEPARTAMENTO', novoDepartamento);
}
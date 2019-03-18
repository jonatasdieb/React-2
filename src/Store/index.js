import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import departamentos from './Departamento/reducer';
import funcionarios from './Funcionario/reducer';
import custos from './Custo/reducer';
import validationMessages from './ValidationMessages/reducer';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    funcionarios,
    departamentos,
    custos,
    validationMessages   
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
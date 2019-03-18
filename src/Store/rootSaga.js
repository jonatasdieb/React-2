import { all } from 'redux-saga/effects';
import departamentoSagas from './Departamento/sagas';
import funcionarioSagas from './Funcionario/sagas';
import custoSagas from './Custo/sagas';

export default function* rootSaga(){  
    yield all([
        funcionarioSagas(),
        departamentoSagas(),
        custoSagas()        
     ])
}
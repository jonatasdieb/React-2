export function getFuncionarios() {  
    return {
      type: 'GET_FUNCIONARIOS',
    }
  }

export function novoFuncionario(action){
  return {
    type: 'NOVO_FUNCIONARIO', action
  }
}

export function getFuncionariosByDepartamentoId(action){
  return {
    type: 'GET_FUNCIONARIOS_BY_DEPARTAMENTOID', action
  }
}
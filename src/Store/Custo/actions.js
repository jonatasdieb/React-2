export function getCustos() {  
    return {
      type: 'GET_CUSTOS',
    }
  }

  export function getCustosByFuncionarioId(action) {  
    return {
      type: 'GET_CUSTOS_BY_FUNCIONARIOID', action
    }
  }

  export function getCustosByDescricao(action) {  
    return {
      type: 'GET_CUSTOS_BY_DESCRICAO', action
    }
  }

export function novoCusto(action){
  return {
    type: 'NOVO_CUSTO', action
  }
}
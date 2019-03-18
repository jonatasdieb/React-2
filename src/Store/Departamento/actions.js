export function getDepartamentos() {    
    return {
      type: 'GET_DEPARTAMENTOS',
    }
  }

export function novoDepartamento(action){
  return {
    type: 'NOVO_DEPARTAMENTO', action
  }
}
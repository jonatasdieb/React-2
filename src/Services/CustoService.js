import api from './Api'

const service = {
    getCustos: () => api.get('Custo/Get'),
    getCustosByFuncionarioId: (funcionarioId) => api.get('Custo/GetByFuncionarioId/' + funcionarioId),
    getCustosByDescricao: (descricao) => api.get('Custo/GetByDescricao/' + descricao),
    novoCusto: (novoCusto) => api.post('Custo/Create', novoCusto),
}

export default service;
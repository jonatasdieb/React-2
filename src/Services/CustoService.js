import api from './Api'

const service = {
    getCustos: () => api.get('Custo/Get'),
    getCustoByFuncionarioId: (funcionarioId) => api.get('http://bolaoarte-001-site3.htempurl.com/Custo/GetByFuncionarioId/' + funcionarioId),
    getCustoByDescricao: (descricao) => api.get('Custo/GetByDescricao/' + descricao),
    novoCusto: (novoCusto) => api.post('Custo/Create', novoCusto),
}

export default service;
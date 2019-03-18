import api from './Api'

const service = {
    novoFuncionario: (novoFuncionario) => api.post('Funcionario/Create', novoFuncionario),   
    getFuncionarios: () => api.get('Funcionario/Get'),
    getFuncionariosByDepartamentoId: (departamentoId) => api.get('Funcionario/GetByDepartamentoId/'+departamentoId)
}

export default service;


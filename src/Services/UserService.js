import api from './Api'

const service = {
    login: (user) => api.post('User/Login', user)    
}

export default service;

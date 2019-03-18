import axios from 'axios';
import { getToken, logout } from './AuthService';


var url = 'https://nodejs-lanlink.herokuapp.com/';

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
})

//intercepta todos os requests para saber se o usuário tem autorização
api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

/* intercepta todas as respostas e, caso usuário não esteja autorizado (401), 
efetua logout que exclui o token e volta pra tela de login */
api.interceptors.response.use(function (response) {
    return response;
},
    function (error) {
        if (error.response.status === 401) {
            logout()
        }

        return Promise.reject(error);
    });

export default api;

import axios from 'axios';
import { getToken } from './AuthService';

var url = 'http://localhost:3001';

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export default api;
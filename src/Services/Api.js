import axios from 'axios';
var url = 'http://localhost:3001';

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',       
    }
})

export default api;
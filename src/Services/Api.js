import axios from 'axios';
var url = 'http://bolaoarte-001-site3.htempurl.com';

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',       
    }
})

export default api;
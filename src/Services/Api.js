import axios from 'axios';
var url = 'http://nodejs-lanlink.herokuapp.com';

const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',       
    }
})

export default api;
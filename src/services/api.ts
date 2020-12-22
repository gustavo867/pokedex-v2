import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokemon-db-json.herokuapp.com/'
});

export default api;
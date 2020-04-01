import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.15.161.57:3333',
});

export default api;

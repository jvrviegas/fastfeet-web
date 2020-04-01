import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.21.41.70:3333',
});

export default api;

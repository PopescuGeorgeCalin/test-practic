import axios from 'axios';

const SERVER_BASE_URL = 'http://localhost:5000/api/';

const server = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 1000,
});

export default server;

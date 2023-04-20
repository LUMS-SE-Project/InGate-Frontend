import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.36.169.69/',
  headers: {},
});

export default instance;

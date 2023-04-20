import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://139.59.59.116/',
  headers: {},
});

export default instance;

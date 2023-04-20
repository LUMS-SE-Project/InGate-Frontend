import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://143.110.182.190/',
  headers: {},
});

export default instance;

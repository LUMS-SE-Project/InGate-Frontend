import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://139.59.59.116/',
  headers: {
    'Content-Type' : 'multipart/form-data',
    'Accept' : 'application/json'
  },
});

export default instance;

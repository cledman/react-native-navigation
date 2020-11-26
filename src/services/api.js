import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.102:3000', // for Android
  // baseURL: 'http://localhost:3000', // for macOS
});

export default api;

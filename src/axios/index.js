import axios from 'axios';

export const clientApi = axios.create({
      baseURL: 'http://localhost:8000/',
      timeout: 10000,
});

clientApi.interceptors.request.use(
      (config) => {
            const token = localStorage.getItem('token');
            config.headers['Authorization'] = `Bearer ${token}`
            return config
      },
      (error) => {
            return Promise.reject(error)
      },
)

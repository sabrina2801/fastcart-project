import axios from 'axios'

export function SaveToken(token) {
 localStorage.setItem('accesToken', token)
};

export function GetToken() {
 return localStorage.getItem('accesToken')
};

export const BaseApi = import.meta.env.VITE_API_URL;

export const AxiosS = axios.create({
 baseURL: BaseApi
});

AxiosS.interceptors.request.use(
  (config) => {
    const token = GetToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // ← пробел обязателен!
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://682bf488d29df7a95be4f742.mockapi.io/api/furniture',
});

export const getProducts = () => api.get('/product');
export const getCategories = () => api.get('/categories');

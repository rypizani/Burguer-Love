import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,  // Adicione esta linha
});

export const getAll = async () => {
  try {
    const response = await api.get('/product');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await api.get('/category');
    return response.data;
  } catch (error) {
    console.error('Error fetching category data:', error);
    throw error;
  }
};
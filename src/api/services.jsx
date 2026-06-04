import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL
})
export const getAllProducts = async () => {
  const response = await api.get('/products');
  return response;
};

export const getAllCategories = async () => {
  const response = await api.get('/products/categories');
  return response;
};

export const getProductsByCategory = async (slug) => {
  const response = await api.get('/products/category/' + slug);
  return response;
};
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response;
};
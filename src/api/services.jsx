import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL
})
export const getAllProducts = async () => {
  const response = await api.get('/products')
  return response
}

export const getAllCategories = async () => {
  const response = await api.get('/products/categories')
  return response
}

export const getProductsByCategory = async (slug) => {
  const response = await api.get('/products/category/' + slug)
  return response
}
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`)
  return response
}



export const mockApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_MOKE_API_URL
})
export const getAllUsers = async () => {
  const response = await mockApi.get('/user')
  return response
}
export const getUserById = async (id) => {
  const response = await mockApi.get(`/user/${id}`)
  return response
}
export const updateUserById = async (id, data) => {
  const response = await mockApi.put(`/user/${id}`, data)
  return response
}
export const createUser = async (data) => {
  const response = await mockApi.post("/user", data)
  return response
}




export const createOrder = async (orderData) => {
  const response = await mockApi.post("/order", orderData)
  return response
}
export const getOrderById = async (id) => {
  const response = await mockApi.get(`/order/${id}`)
  return response
}
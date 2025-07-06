import axios from 'axios'

// Create axios instance
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Customer API methods
export const customerApi = {
  // Get all customers
  getCustomers: () => apiClient.get('/customers'),
  
//   // Get customer by ID
//   getCustomerById: (id: number) => apiClient.get(`/customers/${id}`),
  
//   // Create new customer
//   createCustomer: (customerData: any) => apiClient.post('/customers', customerData),
  
//   // Update customer
//   updateCustomer: (id: number, customerData: any) => apiClient.put(`/customers/${id}`, customerData),
  
//   // Delete customer
//   deleteCustomer: (id: number) => apiClient.delete(`/customers/${id}`),
}

export default apiClient 
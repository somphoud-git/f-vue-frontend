import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get customers
const getCustomers = async () => {
  const response = await api.get('/customers');
  return response.data;
};



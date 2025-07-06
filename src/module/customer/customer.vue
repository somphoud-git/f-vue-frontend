<template>
  <div class="container">
    <h1>Customer List</h1>
    
    <div v-if="loading" class="loading">
      <p>Loading customers...</p>
    </div>
    
    <div v-else-if="error" class="error">
      <p>Error: {{ error }}</p>
      <button @click="fetchCustomers" class="btn">Retry</button>
    </div>
    
    <div v-else-if="customers.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.id }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone || '-' }}</td>
            <td>
              <span :class="['badge', customer.is_active ? 'active' : 'inactive']">
                {{ customer.is_active ? 'Active' : 'Inactive' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div v-else class="empty">
      <p>No customers found.</p>
    </div>
    
    <div class="actions">
      <button @click="fetchCustomers" class="btn">Refresh</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { customerApi } from '../../services/api'

interface Customer {
  id: number
  name: string
  surname?: string
  email: string
  phone?: string
  address?: string
  city?: string
  country?: string
  postal_code?: string
  birth_date?: Date
  is_active: boolean
}

const customers = ref<Customer[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const fetchCustomers = async () => {
  loading.value = true
  error.value = null
  
  try {
    console.log('Fetching customers...')
    const response = await customerApi.getCustomers()
    console.log('API Response:', response)
    customers.value = response.data
  } catch (err: any) {
    console.error('Error:', err)
    error.value = err.message || 'Failed to fetch customers'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCustomers()
})
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.loading, .error, .empty {
  text-align: center;
  padding: 40px;
  background: #f5f5f5;
  border-radius: 8px;
  margin: 20px 0;
}

.error {
  background: #ffe6e6;
  color: #d32f2f;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.table th {
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}

.table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
}

.table tr:hover {
  background: #f8f9fa;
}

.badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.badge.active {
  background: #d4edda;
  color: #155724;
}

.badge.inactive {
  background: #f8d7da;
  color: #721c24;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #007bff;
  color: white;
  font-size: 14px;
}

.btn:hover {
  background: #0056b3;
}

.actions {
  margin-top: 20px;
  text-align: center;
}
</style>

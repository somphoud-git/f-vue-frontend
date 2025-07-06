// ChildComponent.vue
<template>
  <div class="child-container">
    <h3>Child Component</h3>
    <p>Message from parent: {{ message }}</p>
    <button @click="emitMessage">Say Thanks to Parent</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// Define the interface for the props expected by this component
interface ChildProps {
  message: string;
}

// Define the interface for the events this component can emit
interface ChildEmits {
  (event: 'child-says', message: string): void;
}

// Use defineProps with the ChildProps interface
const props = defineProps<ChildProps>();

// Use defineEmits with the ChildEmits interface
const emit = defineEmits<ChildEmits>();

function emitMessage(): void {
  emit('child-says', 'Thanks');
}
</script>

<style scoped>
.child-container {
  border: 1px solid #27ae60;
  padding: 15px;
  margin-top: 15px;
  border-radius: 8px;
  background-color: #e8f8f5;
}

button {
  padding: 8px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #218838;
}
</style>
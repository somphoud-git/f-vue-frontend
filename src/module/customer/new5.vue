<template>
  <div class="parent-container">
    <h2>Parent Component</h2>
    <p>Message from child: {{ childMessage }}</p>
    <div class="child-container">
      <h3>Child Component</h3>
      <p>Message from parent: {{ parentMessage }}</p>
      <button @click="emitMessage">Say Thanks to Parent</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const parentMessage = ref<string>('Hello World');
const childMessage = ref<string>('');

function emitMessage(): void {
  childMessage.value = 'Thanks from child!';
}
</script>

<style scoped>
.parent-container {
  border: 1px solid #3498db;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #eaf2f8;
}

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
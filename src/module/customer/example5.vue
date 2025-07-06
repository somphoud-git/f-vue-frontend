<template>
    <div class="parent-container">
      <h2>Parent Component</h2>
      <p>Message from child: {{ childMessage }}</p>
      <ChildComponent :message="parentMessage" @child-says="handleChildMessage" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ChildComponent from './ChildComponent.vue';
  
  const parentMessage = ref('Hello World');
  const childMessage = ref('');
  
  function handleChildMessage(message) {
    childMessage.value = message;
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
  </style>
  
  <template>
    <div class="child-container">
      <h3>Child Component</h3>
      <p>Message from parent: {{ message }}</p>
      <button @click="emitMessage">Say Thanks to Parent</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  // Define props that this component expects
  const props = defineProps({
    message: String,
  });
  
  // Define custom events that this component can emit
  const emit = defineEmits(['child-says']);
  
  function emitMessage() {
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
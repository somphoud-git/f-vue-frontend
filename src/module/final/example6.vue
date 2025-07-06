<template>
    <div class="toggle-button-container">
      <h2>Toggle Button</h2>
      <button :style="{ backgroundColor: buttonColor }" @click="toggleButton">
        {{ buttonText }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const isYes = ref(true); // Tracks whether the button currently displays "Yes"
  
  const buttonText = computed(() => (isYes.value ? 'Yes' : 'No'));
  
  const buttonColor = computed(() => (isYes.value ? '#28a745' : '#dc3545')); // Green for Yes, Red for No
  
  function toggleButton() {
    isYes.value = !isYes.value; // Invert the boolean value
  }
  </script>
  
  <style scoped>
  .toggle-button-container {
    border: 1px solid #8e44ad;
    padding: 20px;
    border-radius: 8px;
    background-color: #f4ecf7;
  }
  
  button {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease; /* Smooth transition for color change */
  }
  
  button:hover {
    opacity: 0.9;
  }
  </style>
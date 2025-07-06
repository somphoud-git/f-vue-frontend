// ParentComponent.vue
<template>
  <div class="parent-container">
    <h2>Parent Component</h2>
    <p>Message from child: {{ childMessage }}</p>
    <ChildComponent :message="parentMessage" @child-says="handleChildMessage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

// Define the type for the message prop
interface ParentProps {
  message: string;
}

const parentMessage = ref<string>('Hello World');
const childMessage = ref<string>('');

// Define the event handler with the expected type for the emitted payload
function handleChildMessage(message: string): void {
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


import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
//import 'ant-design-vue/dist/reset.css';
//import './assets/global.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
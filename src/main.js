import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.scss'
import App from './App.vue'
import router from './router';
import axios from 'axios';

const app = createApp(App);
const pinia = createPinia();

const storageBaseUrl = 'http://127.0.0.1:8000/storage/';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_myapp_token')}`;

axios.storageBaseUrl = storageBaseUrl;

app.use(pinia);
app.use(router);

app.mount('#app');
